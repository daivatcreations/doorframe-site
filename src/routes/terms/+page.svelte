<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!-- Doorframe's terms (Oareo's, same publisher), with sections on estimates and medical advice for Doorframe. -->
<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { SUPPORT_EMAIL } from '$lib/constants/app';
</script>

<SeoHead
	title="Terms of Use: Doorframe Height Tracker for iPhone"
	description="Terms for Doorframe, the free iPhone app that measures your family's height with LiDAR and charts kids' growth. Growth figures aren't medical advice."
	path="/terms"
	breadcrumb="Terms of Use"
/>

<LegalPage
	title="Terms of Use"
	intro="These terms cover your use of Doorframe. They're written to be read, and they sit alongside Apple's own terms for apps from the App Store."
	effective="October 7, 2026"
>
	<section>
		<h2>1. About Doorframe</h2>
		<p>
			Doorframe (on the App Store as Doorframe: Height Tracker) is a free family height tracker for
			iPhone, published by Daivat Creations. It is provided at no cost and does not require an
			account.
		</p>
	</section>

	<section>
		<h2>2. License Grant</h2>
		<p>
			Subject to these terms, Daivat Creations grants you a limited, non-exclusive,
			non-transferable, revocable license to download and use Doorframe on any iPhone you own or
			control, as permitted by the Apple App Store Terms of Service.
		</p>
	</section>

	<section>
		<h2>3. Your Content</h2>
		<p>
			The people, measurements and photos in Doorframe are yours. They stay on your iPhone, and we
			have no access to them. Doorframe claims no rights to your content, and you are responsible
			for what you record, export and share. Measure people with their permission, or their parent's
			or guardian's.
		</p>
	</section>

	<section>
		<h2>4. Acceptable Use</h2>
		<p>When using Doorframe, you agree not to:</p>
		<ul>
			<li>Use the app for any unlawful purpose, or to violate the rights of others.</li>
			<li>Reverse-engineer, decompile, or attempt to extract the source code of the app.</li>
			<li>Interfere with or disrupt the integrity or performance of the app.</li>
		</ul>
	</section>

	<section>
		<h2>5. Measurements Are Estimates</h2>
		<p>
			Doorframe measures with your iPhone's camera and LiDAR scanner, and every height it shows is
			an estimate with a range and a confidence level. Results depend on the light, the distance,
			posture and how still someone is. Don't rely on Doorframe where an exact measurement matters.
		</p>
	</section>

	<section>
		<h2>6. Not Medical Advice</h2>
		<p>
			<strong
				>Growth charts, percentiles, growth pace and estimated heights in Doorframe are information.
				They are not medical advice, and not a substitute for a doctor.</strong
			>
			The charts use the WHO and CDC growth references. If you have questions about how a child is growing,
			talk to their doctor.
		</p>
	</section>

	<section>
		<h2>7. Intellectual Property</h2>
		<p>
			The Doorframe app, website, name, mark and all associated intellectual property are owned by
			Daivat Creations. These terms do not grant you any rights to use the Doorframe name, mark or
			branding except as needed to use the app as intended.
		</p>
	</section>

	<section>
		<h2>8. No Warranty</h2>
		<p>
			Doorframe is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties
			of any kind, whether express, implied, or statutory, including but not limited to implied warranties
			of merchantability, fitness for a particular purpose, and non-infringement.
		</p>
		<p>
			We do not warrant that the app will be uninterrupted, error-free, or free of harmful
			components, or that its measurements, charts or estimates will be accurate or complete.
		</p>
	</section>

	<section>
		<h2>9. Limitation of Liability</h2>
		<p>
			To the maximum extent permitted by applicable law, Daivat Creations and its developers shall
			not be liable for any indirect, incidental, special, consequential, or punitive damages,
			including but not limited to loss of data, loss of profits, or damages arising from reliance
			on the app, regardless of the cause of action or the theory of liability.
		</p>
		<p>
			Since Doorframe is provided free of charge, our total aggregate liability for any claim
			arising from or related to the use of Doorframe shall not exceed zero dollars ($0.00 USD).
		</p>
	</section>

	<section>
		<h2>10. Indemnification</h2>
		<p>
			You agree to indemnify and hold harmless Daivat Creations and its developers from any claims,
			damages, losses, or expenses (including reasonable legal fees) arising from your use of
			Doorframe, your violation of these terms, or your violation of any rights of a third party.
		</p>
	</section>

	<section>
		<h2>11. Third-Party Platforms</h2>
		<p>
			Doorframe is distributed through the Apple App Store and relies on Apple platform features,
			including ARKit and the LiDAR scanner. Your use of the app is also subject to
			<a
				href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
				target="_blank"
				rel="noopener noreferrer">Apple's Licensed Application End User License Agreement</a
			>.
		</p>
	</section>

	<section>
		<h2>12. Termination</h2>
		<p>
			You may stop using Doorframe at any time by deleting the app from your device. We reserve the
			right to modify, suspend, or discontinue the app at any time without notice. These terms
			remain in effect for as long as you use Doorframe.
		</p>
	</section>

	<section>
		<h2>13. Governing Law</h2>
		<p>
			These terms shall be governed by and construed in accordance with the laws of the State of
			California, United States, without regard to its conflict of law provisions.
		</p>
	</section>

	<section>
		<h2>14. Severability</h2>
		<p>
			If any provision of these terms is found to be unenforceable or invalid, that provision will
			be limited or eliminated to the minimum extent necessary, and the remaining provisions will
			remain in full force and effect.
		</p>
	</section>

	<section>
		<h2>15. Changes to These Terms</h2>
		<p>
			We may update these terms from time to time. When we do, we will revise the effective date at
			the top of this page. Continued use of Doorframe after changes are posted constitutes your
			acceptance of the revised terms.
		</p>
	</section>

	<section>
		<h2>16. Contact</h2>
		<p>If you have questions about these terms, contact us at:</p>
		<p><a href="mailto:{SUPPORT_EMAIL}">{SUPPORT_EMAIL}</a></p>
	</section>
</LegalPage>
