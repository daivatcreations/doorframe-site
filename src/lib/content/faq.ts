/*
 * Copyright (c) 2026 Daivat Creations
 * All rights reserved.
 *
 * This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
// One source for the Support page and its FAQPage structured data, so the two cannot drift.
// Checked against the app's main (2c7e7e6, 1.0 build 6) on 2026-10-05.
export type FaqTopic = { topic: string; items: { q: string; a: string }[] };

export const FAQ: FaqTopic[] = [
	{
		topic: 'Measuring',
		items: [
			{
				q: 'Which iPhones can measure live?',
				a: 'Measuring live uses the LiDAR scanner on the Pro and Pro Max models. Doorframe needs iOS 26 or later. On an iPhone without LiDAR you can still enter heights, for example from a check-up, and see the Doorframe and growth charts.'
			},
			{
				q: 'How do I measure someone?',
				a: 'Tap the Measure button in the tab bar. Stand them on the floor, 1 to 3 metres away, with their head and feet in view, and hold roughly still. The ring around Capture fills and Doorframe captures by itself, then asks who it is. To use the button yourself, turn Auto off.'
			},
			{
				q: 'How accurate is it?',
				a: 'Every height shows its range (for example 91.2 cm ± 0.9 cm) and how confident Doorframe is. For the best reading, stand them straight on the floor, show their head and feet, use good light, and hold still. If the range looks wide, measure again.'
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
				q: 'How does Looking Ahead predict a grown-up height?',
				a: "From their own growth curve once they're two, from both parents' heights, or from both. You choose who a child's parents are in their profile; Doorframe never guesses. Every prediction shows its range."
			},
			{
				q: 'Is this medical advice?',
				a: "No. Growth percentiles and predictions are information, not medical advice. If you're worried about how a child is growing, talk to their doctor."
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
				a: 'To measure: the camera and LiDAR see how tall someone is. Nothing it sees leaves your iPhone. Doorframe never asks for your photo library, location, contacts or Health.'
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
