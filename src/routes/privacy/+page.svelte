<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  Every claim here was checked against the app's main (2c7e7e6, 1.0 build 6) on
  2026-10-05: no networking code (no URLSession, CloudKit or Network; DoorframeStore
  is local-only SwiftData); the one usage description is NSCameraUsageDescription;
  PrivacyInfo.xcprivacy declares no tracking and only UserDefaults (CA92.1);
  reminders are local notifications (ReminderScheduler); CSV export is a ShareLink
  and Erase All Data deletes every person, measurement and photo (SettingsView);
  the store is not excluded from device backups. Re-checked 2026-10-06 at main 97fa2a2 (build 8):
  the photo library is never read; the only other usage description is the add-only
  NSPhotoLibraryAddUsageDescription, for saving a share card (PR #7). Re-check before changing a claim.
-->
<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { COMPANY, SUPPORT_EMAIL } from '$lib/constants/app';
</script>

<SeoHead
	title="Privacy Policy · Doorframe"
	description="Doorframe keeps your family's heights and photos on your iPhone: no account, no server, no ads, no tracking, no analytics. Nothing is collected."
	path="/privacy"
	imageAlt="Doorframe privacy policy"
/>

<LegalPage
	title="Privacy Policy"
	intro="Doorframe is a family height tracker for iPhone. It has no account, no server, no ads and no analytics. Your family's heights and photos stay on your iPhone."
	effective="October 6, 2026"
>
	<section>
		<h2>1. What Doorframe keeps, and where</h2>
		<ul>
			<li>
				The people you add: their name, and, as you choose, their birthday, sex, height, parents and
				a reminder to measure.
			</li>
			<li>
				Their measurements: each height with its range and confidence, the date, how it was
				measured, any note, and the photo taken when measuring.
			</li>
			<li>Your settings, such as units.</li>
		</ul>
		<p>
			All of it is stored on your iPhone, in the app's own storage. It is not sent to us or to
			anyone else. Doorframe contains no code that sends anything over the internet, and it has no
			sync: each iPhone keeps its own family.
		</p>
	</section>

	<section>
		<h2>2. What we collect</h2>
		<p>
			Nothing. We have no server to send it to. We don't collect names, heights, photos, email
			addresses, identifiers, usage data or location.
		</p>
		<p>
			If you write to us, we receive your message and your email address, and use them to reply and
			for nothing else.
		</p>
	</section>

	<section>
		<h2>3. The camera</h2>
		<p>
			Doorframe asks for the camera to measure height. The camera and LiDAR scanner work out how
			tall someone is on your iPhone, and nothing they see leaves it. When a measurement is saved,
			its photo is saved with it, in Doorframe, on your iPhone.
		</p>
		<p>
			Doorframe never reads your photo library. If you choose to save a share card to Photos, iOS
			asks once, and Doorframe only adds that picture. It does not ask for your location, contacts,
			microphone or Apple Health.
		</p>
	</section>

	<section>
		<h2>4. Notifications</h2>
		<p>
			Reminders to measure are optional and set per person. They are scheduled on your iPhone; no
			server is involved.
		</p>
	</section>

	<section>
		<h2>5. Analytics, advertising and tracking</h2>
		<p>
			None. The app has no analytics, advertising or third-party code, and it does not track you
			across apps or websites. If you choose to share analytics with app developers in your iPhone's
			settings, Apple may share crash reports with us.
		</p>
	</section>

	<section>
		<h2>6. Sharing</h2>
		<p>
			Nothing is shared unless you share it. When you export your measurements as a CSV file or
			share a measurement, it goes where you choose to send it.
		</p>
	</section>

	<section>
		<h2>7. Your control</h2>
		<p>
			You can export every measurement, or erase everything, from Settings, then Data, in the app.
			Erase All Data deletes every person, measurement and photo. Deleting the app deletes its data.
			Backups follow your iCloud or computer backup settings, as they do for any app.
		</p>
	</section>

	<section>
		<h2>8. This website</h2>
		<p>
			This website sets no cookies and loads nothing from other companies. It counts page views with
			Vercel Web Analytics, which runs from this site's own address, uses no cookies and does not
			identify you. This is the website, not the app: the app counts nothing. Our host, Vercel, may
			keep standard server logs, such as IP addresses, for security.
		</p>
	</section>

	<section>
		<h2>9. Children</h2>
		<p>
			Doorframe is made for families to measure their children. It is used by a parent or guardian,
			and it collects nothing from anyone, children included: a child's details stay on the family's
			iPhone.
		</p>
	</section>

	<section>
		<h2>10. Changes</h2>
		<p>If this policy changes, we'll update it here and change the effective date.</p>
	</section>

	<section>
		<h2>11. Contact</h2>
		<p>Doorframe is made by {COMPANY}. For questions about privacy, write to us:</p>
		<p><a href="mailto:{SUPPORT_EMAIL}">{SUPPORT_EMAIL}</a></p>
	</section>
</LegalPage>
