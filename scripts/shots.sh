#!/bin/zsh
# Captures the site's phone screenshots from the simulator with the app's DEBUG
# launch arguments. Use your own simulator, never the app agent's: other agents
# keep simulators booted, so this never targets "booted".
# Usage: SIM=<udid> [SHOT_WAIT=s] scripts/shots.sh <name> <light|dark> [launch args]
#   SIM=$SIM scripts/shots.sh library light
#   SIM=$SIM scripts/shots.sh wall dark -openWall
#   SIM=$SIM scripts/shots.sh person light -openPerson
#   SIM=$SIM scripts/shots.sh measure light -tab measure -demoLive
set -euo pipefail
NAME=$1; MODE=$2; shift 2
: ${SIM:?set SIM to your simulator udid}
OUT=static/images/screens; mkdir -p $OUT scratch
xcrun simctl ui $SIM appearance $MODE
xcrun simctl status_bar $SIM override --time 9:41 --batteryState charged --batteryLevel 100 \
  --cellularBars 4 --wifiBars 3 --dataNetwork wifi
# Sample family (Arlo, Maya, Sam) in a throwaway store; en_GB shows centimetres.
xcrun simctl launch --terminate-running-process $SIM com.daivatcreations.Doorframe \
  -demoData -skipOnboarding -inMemory -AppleLanguages '(en)' -AppleLocale en_GB "$@" > /dev/null
sleep ${SHOT_WAIT:-5}
xcrun simctl io $SIM screenshot scratch/$NAME-$MODE.png > /dev/null 2>&1
magick scratch/$NAME-$MODE.png -resize 780x -quality 82 $OUT/$NAME-$MODE.webp
echo "$OUT/$NAME-$MODE.webp"
