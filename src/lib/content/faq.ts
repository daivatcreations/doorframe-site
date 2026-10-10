/*
 * Copyright (c) 2026 Daivat Creations
 * All rights reserved.
 *
 * This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
// One source for the Support page and its FAQPage structured data, so the two cannot drift.
// Checked against the app's main (2c7e7e6, 1.0 build 6) on 2026-10-05; distance and Capture
// answers corrected from the app's review (main 3d164be, LiveQuality.standingDistance) on 2026-10-06.
// Re-checked against main 2431dbc (1.0 build 11) on 2026-10-10: capture waits for agreeing readings
// (LiveStabilizer.isConsistent) and head, feet and floor; the percentile, grown-up height and
// consistency answers are the app's own card wording (EntryFacts, PersonFacts).
export type FaqTopic = { topic: string; items: { q: string; a: string }[] };

export const FAQ: FaqTopic[] = [
	{
		topic: 'Measuring',
		items: [
			{
				q: 'Can an iPhone measure height?',
				a: "Yes, with LiDAR. Doorframe uses the LiDAR scanner on iPhone Pro models to measure someone's height live: point it at them standing on the floor, hold still, and it captures by itself, with a range and how confident it is. On any iPhone you can still enter a height you already have."
			},
			{
				q: 'Which iPhones have LiDAR?',
				a: 'The Pro and Pro Max models, from iPhone 12 Pro onward. The other models (the standard iPhone, mini, Plus, SE, 16e and Air) have no LiDAR. Doorframe needs iOS 26 or later; without LiDAR you can still enter heights, for example from a check-up, and see the Doorframe and growth charts.'
			},
			{
				q: "How do I measure my child's height at home?",
				a: 'Take their shoes off and stand them straight on a hard floor, heels down, looking ahead. With Doorframe, point your iPhone at them from about 1.2 to 3.5 metres away, with their head and feet in view, and hold still: it captures by itself, then asks who it is. For a baby, switch to Lying and lay them flat on the floor. Measure at the same time of day each time; people are a little taller in the morning.'
			},
			{
				q: 'How do I measure someone?',
				a: "Tap the Measure button in the tab bar. Stand them on the floor, about 1.2 to 3.5 metres away (closer for a baby lying down), with their head and feet in view, and hold roughly still. The ring around Capture fills and Doorframe captures by itself, then asks who it is. You can also tap Capture once it turns green. Turn Auto off if you'd rather always tap."
			},
			{
				q: 'How accurate is it?',
				a: 'Every height shows its range (for example 91.2 cm ± 0.9 cm) and how confident Doorframe is. It captures only when it can see their head, their feet and the floor, and once several readings agree, so measuring someone again gives much the same height: in our testing, usually within about a centimetre between runs. For the best reading, stand them straight, use good light, and hold still. If the range looks wide, measure again.'
			},
			{
				q: 'Does it work for babies?',
				a: 'Yes. Switch Measure from Standing to Lying, and lay them flat on the floor.'
			},
			{
				q: 'What other ways can I add a height?',
				a: 'Tap + in the Library. Take Photo with LiDAR takes a still photo that keeps depth, so someone can be measured on their own. Enter a height adds a number you already have, such as one from a check-up.'
			},
			{
				q: 'What does "Is something covering the camera?" mean?',
				a: "Doorframe can't see a clear picture: check the lens is uncovered and clean. If it says it's too dark, turn on a light."
			},
			{
				q: 'Turned the camera off by mistake?',
				a: 'Open Measure and tap Open Settings, then turn on Camera. Or go to Settings, then Doorframe, then Camera. When you come back, Doorframe picks up where you left off.'
			}
		]
	},
	{
		topic: 'Family and growth',
		items: [
			{
				q: 'Who can I add?',
				a: 'Anyone: kids, grown-ups, grandparents. When you add someone, Doorframe asks whether they are a child or a grown-up. Children have a birthday, so their growth can be charted.'
			},
			{
				q: 'What are the growth charts?',
				a: 'For babies, children and teens: the WHO standards up to age two and the CDC charts from 2 to 20, with the shaded 3rd to 97th and 25th to 75th percentile bands, their current percentile and how fast they are growing. Grown-ups get a steady height card instead.'
			},
			{
				q: 'What is a height percentile?',
				a: "It compares a child's height with children of the same age and sex. The 56th percentile means taller than about 56 in 100 of them. Anywhere from the 3rd to the 97th is typical, and following their own line on the chart matters more than any one number. Doorframe uses the WHO standards to age two and the CDC charts to 20. It's information, not medical advice."
			},
			{
				q: 'How tall will my child be?',
				a: "Nobody can say for sure, but Doorframe's Grown-up height card gives an estimate: from their own growth curve once they're two (CDC growth data), from both parents' heights, or from both. You choose who a child's parents are in their profile; Doorframe never guesses. It shows a range, not one number. It's an estimate, not a promise: every child grows in their own way, and their doctor can tell you more."
			},
			{
				q: 'Why do grown-ups have no chart?',
				a: "Grown-ups don't grow, so they get a steady height instead: the average of their last measurements, and how consistent those measurements are. Their height still stands on the Doorframe beside the kids'."
			},
			{
				q: 'Is this medical advice?',
				a: "No. Growth percentiles and estimates are information, not medical advice. If you're worried about how a child is growing, talk to their doctor."
			},
			{
				q: 'Can both parents use it?',
				a: 'Not together yet. Each iPhone keeps its own family; there is no sync between phones.'
			},
			{
				q: 'Can Doorframe remind me to measure?',
				a: 'Yes. In a person\'s profile, tap Edit and set "Remind me to measure" to every month, every 3 months or every 6 months. Reminders are scheduled on your iPhone.'
			}
		]
	},
	{
		topic: 'Privacy and data',
		items: [
			{
				q: 'Where is my data?',
				a: "On your iPhone, and nowhere else. Doorframe has no account, no server and no sync, and it has nothing to send your family's heights or photos to."
			},
			{
				q: 'Why does Doorframe need the camera?',
				a: 'To measure: the camera and LiDAR see how tall someone is. Nothing it sees leaves your iPhone. Doorframe never reads your photo library: if you choose to save a share card to Photos, iOS asks once, and Doorframe only adds that picture. It never asks for your location, contacts or Health.'
			},
			{
				q: 'Can I export or erase my data?',
				a: 'Yes, in Settings, under Data. Export Measurements (CSV) shares every measurement as a spreadsheet file; Erase All Data deletes every person, measurement and photo.'
			},
			{
				q: 'How do I switch between centimetres and feet and inches?',
				a: 'Doorframe follows your region: feet and inches in the US, centimetres elsewhere. To choose, go to Settings, then Units.'
			},
			{
				q: 'What happens if I delete the app?',
				a: "Its data is deleted with it, unless it's in a backup of your iPhone."
			}
		]
	}
];
