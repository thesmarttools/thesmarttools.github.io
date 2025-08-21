const data = [
	{
		id: 1,
		title: 'A.B.C.D.E',
		content: {
			acronyms: [
				{
					letter: 'A',
					meaning: 'Activating event or trigger',
					definition:
						'What actually happened? This is the specific situation or event that got your wheels turning',
					scenario: '',
				},
				{
					letter: 'B',
					meaning: 'Belief',
					definition:
						'What story are you telling yourself about what happened? These are your thoughts and interpretations',
					scenario: '',
				},
				{
					letter: 'C',
					meaning: 'Consequence',
					definition:
						'How did those thoughts make you feel and act? This is where your emotions and behaviors show up',
					scenario: '',
				},
				{
					letter: 'D',
					meaning: 'Dispute',
					definition:
						'Time to play detective with your own thoughts - are they really true and helpful?',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Effective new belief',
					definition:
						'Create a healthier, more realistic way of thinking about the situation',
					scenario: '',
				},
			],
			explanation:
				'Your personal toolkit for catching those sneaky negative thoughts and turning them around using proven therapy techniques.',
		},
		scenarios: [
			{
				title: 'Job Interview Rejection',
				content:
					"You didn't get a job you really wanted. Instead of thinking 'I'm not good enough' (old belief), you recognize that one rejection doesn't define your worth and there could be many factors involved (new belief).",
				btnLabel: 'Reframe Rejection',
			},
			{
				title: "Friend Didn't Text Back",
				content:
					"Your friend hasn't responded to your message. Rather than assuming they're mad at you (old belief), you consider they might be busy or dealing with their own stuff (new belief).",
				btnLabel: 'Question Assumptions',
			},
		],
	},
	{
		id: 2,
		title: 'C.B.A.',
		content: {
			acronyms: [
				{
					letter: 'C',
					meaning: 'Cost',
					definition:
						"What's this behavior really costing you? Think beyond money - your relationships, health, self-respect",
					scenario: '',
				},
				{
					letter: 'B',
					meaning: 'Benefit',
					definition:
						'Be honest - what are you getting out of this behavior? There must be something, right?',
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Analysis',
					definition:
						'Put it all on the table and see which side weighs more - is it worth it?',
					scenario: '',
				},
			],
			explanation:
				'Your personal pro/con list that cuts through the BS - helping you see if a behavior is actually serving you or just feels like it is.',
		},
		scenarios: [
			{
				title: 'Binge Watching vs. Sleep',
				content:
					"Cost: Exhaustion, poor work performance, health issues. Benefit: Temporary escape, entertainment. Analysis: The short-term comfort isn't worth the long-term consequences to your wellbeing.",
				btnLabel: 'Weigh It Out',
			},
			{
				title: 'Avoiding Difficult Conversations',
				content:
					'Cost: Unresolved conflicts, built-up resentment, damaged relationships. Benefit: Temporary peace, avoiding confrontation. Analysis: The temporary comfort is creating bigger problems that will be harder to solve later.',
				btnLabel: 'Face the Truth',
			},
		],
	},
	{
		id: 3,
		title: 'D.E.A.D.S.',
		content: {
			acronyms: [
				{
					letter: 'D',
					meaning: 'Deny or Delay',
					definition:
						'Just say "not right now" - you don\'t have to give in immediately. Urges have expiration dates',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Escape',
					definition:
						'Change your scenery! Sometimes the best thing you can do is physically remove yourself from temptation',
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Avoid/Accept/Attack',
					definition:
						'Pick your battle strategy: dodge the trigger, accept the feeling will pass, or tackle it head-on',
					scenario: '',
				},
				{
					letter: 'D',
					meaning: 'Distract',
					definition:
						'Redirect that mental energy somewhere else - call someone, go for a walk, binge a show',
					scenario: '',
				},
				{
					letter: 'S',
					meaning: 'Substitute',
					definition:
						'Swap out the harmful habit for something that actually makes you feel good about yourself',
					scenario: '',
				},
			],
			explanation:
				"Five solid moves you can make when cravings hit - because you've got options, and every craving eventually fades.",
		},
		scenarios: [
			{
				title: 'Craving Alcohol at a Party',
				content:
					"Delay: 'I'll wait 15 minutes first.' Escape: Step outside or go to the bathroom. Accept: 'This urge will pass.' Distract: Start a conversation with someone new. Substitute: Grab a mocktail or soda instead.",
				btnLabel: 'Beat the Craving',
			},
			{
				title: 'Wanting to Text an Ex',
				content:
					"Delay: 'I'll wait until tomorrow.' Escape: Leave your phone in another room. Avoid: Delete their number (again). Distract: Call a friend or watch funny videos. Substitute: Write in a journal instead.",
				btnLabel: 'Resist the Urge',
			},
		],
	},
	{
		id: 4,
		title: 'D.I.S.A.R.M.',
		content: {
			acronyms: [
				{
					letter: 'D',
					meaning: 'Destructive',
					definition:
						'Notice when your brain is feeding you garbage thoughts and mental images',
					scenario: '',
				},
				{
					letter: 'I',
					meaning: 'Imagery',
					definition:
						"Catch those vivid mental movies that make you want to use - they're not real predictions",
					scenario: '',
				},
				{
					letter: 'S',
					meaning: 'Self-talk',
					definition:
						"What's that inner voice telling you? If it's being a jerk, it's time to change the conversation",
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Awareness',
					definition:
						"Wake up to these patterns - you can't change what you don't notice",
					scenario: '',
				},
				{
					letter: 'R',
					meaning: 'Refusal',
					definition:
						'Tell those toxic thoughts "thanks but no thanks" - you don\'t have to engage',
					scenario: '',
				},
				{
					letter: 'M',
					meaning: 'Method',
					definition:
						'Have a game plan ready to replace the junk thoughts with something better',
					scenario: '',
				},
			],
			explanation:
				'Your mental bodyguard system - protecting you from the thoughts and images that try to sabotage your progress.',
		},
		scenarios: [
			{
				title: 'Gambling Urge Imagery',
				content:
					'You start visualizing winning big at the casino. Recognize this as destructive imagery, become aware of the pattern, refuse to engage with the fantasy, and replace it with images of financial stability and peace of mind.',
				btnLabel: 'Block the Fantasy',
			},
			{
				title: 'Negative Self-Talk Spiral',
				content:
					"Inner voice says 'You'll never change, why even try?' Catch this destructive self-talk, recognize the familiar pattern, refuse to argue with it, and replace it with 'I'm learning and growing every day.'",
				btnLabel: 'Silence the Critic',
			},
		],
	},
	{
		id: 5,
		title: 'H.A.L.T.',
		content: {
			acronyms: [
				{
					letter: 'H',
					meaning: 'Hungry',
					definition:
						'When did you last eat? Your brain needs fuel, and "hangry" is a real thing that affects decisions',
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Angry',
					definition:
						"Are you pissed off about something? Anger can hijack your judgment if you don't deal with it",
					scenario: '',
				},
				{
					letter: 'L',
					meaning: 'Lonely',
					definition:
						'Feeling disconnected from people? Isolation makes everything harder and cravings stronger',
					scenario: '',
				},
				{
					letter: 'T',
					meaning: 'Tired',
					definition:
						"Exhausted? Your willpower runs on empty when you do - rest isn't optional",
					scenario: '',
				},
			],
			explanation:
				'Your basic human needs checklist - because sometimes the solution is as simple as a snack, a nap, or a hug.',
		},
		scenarios: [
			{
				title: 'Afternoon Craving Attack',
				content:
					"You're suddenly craving your old habit at 3 PM. Check: Haven't eaten since breakfast (Hungry), frustrated with work project (Angry), been alone all day (Lonely), only got 4 hours sleep (Tired). Solution: Eat a healthy snack, take a walk, call a friend, plan an early bedtime.",
				btnLabel: 'Check HALT',
			},
			{
				title: 'Weekend Relapse Risk',
				content:
					"Saturday evening and you're thinking about using. Check: Skipped meals while running errands (Hungry), argument with family (Angry), friends are all busy (Lonely), stayed up too late binge-watching (Tired). Address each need before the craving gets stronger.",
				btnLabel: 'Address Needs',
			},
		],
	},
	{
		id: 6,
		title: 'H.O.P.E.',
		content: {
			acronyms: [
				{
					letter: 'H',
					meaning: 'Helping',
					definition:
						'Do something for someone else - it gets you out of your own head and feels amazing',
					scenario: '',
				},
				{
					letter: 'O',
					meaning: 'Others',
					definition:
						"Build real connections with people who matter to you - isolation is recovery's enemy",
					scenario: '',
				},
				{
					letter: 'P',
					meaning: 'Purpose',
					definition:
						'Find your "why" - what makes you want to get up in the morning?',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Esteem',
					definition:
						'Do things that make you proud of yourself - small wins count too',
					scenario: '',
				},
			],
			explanation:
				"Your recipe for building a life that feels worth living - because hope isn't just a feeling, it's something you create.",
		},
		scenarios: [
			{
				title: 'Feeling Hopeless and Isolated',
				content:
					'Volunteer at a local food bank (Helping), join a recovery support group (Others), remember your goal of being present for your kids (Purpose), celebrate 30 days clean (Esteem). Each action builds on the others to create genuine hope.',
				btnLabel: 'Build Hope',
			},
			{
				title: 'Lost Sense of Direction',
				content:
					"Help a neighbor with groceries (Helping), reach out to old friends you trust (Others), explore going back to school (Purpose), acknowledge you've been handling stress better lately (Esteem). Small steps toward a meaningful life.",
				btnLabel: 'Find Direction',
			},
		],
	},
	{
		id: 7,
		title: 'H.O.V',
		content: {
			acronyms: [
				{
					letter: 'H',
					meaning: 'Hierarchy',
					definition:
						'Make a ranked list of what truly matters to you - what comes first when push comes to shove?',
					scenario: '',
				},
				{
					letter: 'O',
					meaning: 'Of',
					definition:
						'The connection between your priorities and your deeper values',
					scenario: '',
				},
				{
					letter: 'V',
					meaning: 'Values',
					definition:
						'What do you really care about? Not what you think you should care about, but what actually moves you',
					scenario: '',
				},
			],
			explanation:
				'Your personal compass for making decisions - when you know what matters most, choices become clearer.',
		},
		scenarios: [
			{
				title: 'Career vs. Family Time Decision',
				content:
					'Job offers overtime but kids have a recital. Your hierarchy: Family relationships, personal health, financial stability, career advancement. Since family tops your list, the choice becomes clear - attend the recital.',
				btnLabel: 'Choose Values',
			},
			{
				title: 'Friend Wants You to Skip Therapy',
				content:
					'Friend wants to hang out during your therapy session. Your values hierarchy: Mental health, authentic relationships, fun/socializing. Explain that therapy is non-negotiable and suggest meeting afterward.',
				btnLabel: 'Rank Priorities',
			},
		],
	},
	{
		id: 8,
		title: 'I.C.E.',
		content: {
			acronyms: [
				{
					letter: 'I',
					meaning: 'Identify',
					definition:
						'Spot the problem patterns - what thoughts, feelings, or situations keep tripping you up?',
					scenario: '',
				},
				{
					letter: 'C',
					meaning: 'Challenge',
					definition:
						'Question everything - is this thought true? Is this behavior helping or hurting?',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Eliminate',
					definition:
						'Replace the junk with something better - out with the old, in with the helpful',
					scenario: '',
				},
			],
			explanation:
				"Three simple steps to break free from patterns that aren't serving you anymore.",
		},
		scenarios: [
			{
				title: 'People-Pleasing Pattern',
				content:
					"Identify: You always say yes even when overwhelmed. Challenge: Is saying yes really helping anyone if you're burnt out and resentful? Eliminate: Replace automatic 'yes' with 'Let me check my schedule and get back to you.'",
				btnLabel: 'Break the Pattern',
			},
			{
				title: 'Social Media Comparison',
				content:
					'Identify: Scrolling Instagram makes you feel inadequate. Challenge: Are these highlight reels an accurate picture of reality? Eliminate: Replace mindless scrolling with calling a real friend or going for a walk.',
				btnLabel: 'Challenge & Change',
			},
		],
	},
	{
		id: 9,
		title: 'L.F.T.',
		content: {
			acronyms: [
				{
					letter: 'L',
					meaning: 'Low',
					definition:
						'Notice when your patience is running thin - this is when bad decisions happen',
					scenario: '',
				},
				{
					letter: 'F',
					meaning: 'Frustration',
					definition:
						"That feeling when things aren't going your way - totally normal, but needs managing",
					scenario: '',
				},
				{
					letter: 'T',
					meaning: 'Tolerance',
					definition:
						'Build your ability to sit with uncomfortable feelings without needing to escape immediately',
					scenario: '',
				},
			],
			explanation:
				"Learning to deal with life's annoying moments without losing your cool or your progress.",
		},
		scenarios: [
			{
				title: 'Traffic Jam Meltdown',
				content:
					"Stuck in traffic, running late, patience is gone. Recognize your low frustration tolerance, accept that this sucks but isn't dangerous, practice breathing instead of road rage. Build tolerance for things outside your control.",
				btnLabel: 'Stay Cool',
			},
			{
				title: 'Technology Not Working',
				content:
					"Computer keeps crashing while you're trying to work. Notice you're at your limit, acknowledge the frustration is valid, take breaks between attempts instead of getting more angry. Learning to tolerate technical difficulties.",
				btnLabel: 'Build Tolerance',
			},
		],
	},
	{
		id: 10,
		title: 'P.I.E.',
		content: {
			acronyms: [
				{
					letter: 'P',
					meaning: 'Progress',
					definition:
						"Celebrate the wins, big and small - you're moving forward even if it doesn't always feel like it",
					scenario: '',
				},
				{
					letter: 'I',
					meaning: 'Insight',
					definition:
						'Those "aha!" moments when you finally get why you do what you do',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Empowerment',
					definition:
						"That growing sense that you're the one in charge of your life - and you're getting better at it",
					scenario: '',
				},
			],
			explanation:
				'Your personal growth tracker - because recovery is about so much more than just not using.',
		},
		scenarios: [
			{
				title: 'Three Months Clean',
				content:
					'Progress: Ninety days without using, better sleep, improved relationships. Insight: Realizing you used to cope with boredom and loneliness. Empowerment: Choosing healthy activities and reaching out to friends instead of isolating.',
				btnLabel: 'Track Growth',
			},
			{
				title: 'Handled Stress Without Old Habits',
				content:
					'Progress: Used coping skills during a tough week at work. Insight: Understanding that your anxiety spikes on Sundays because of work dread. Empowerment: Planning Sunday self-care routines to manage the anxiety proactively.',
				btnLabel: 'Celebrate Wins',
			},
		],
	},
	{
		id: 11,
		title: 'P.P.P',
		content: {
			acronyms: [
				{
					letter: 'P',
					meaning: 'Practice',
					definition:
						'Use your recovery tools regularly, not just when things get rough - like going to the gym for your brain',
					scenario: '',
				},
				{
					letter: 'P',
					meaning: 'Patience',
					definition:
						"This stuff takes time, and that's totally normal - be kind to yourself while you figure it out",
					scenario: '',
				},
				{
					letter: 'P',
					meaning: 'Persistence',
					definition:
						"Keep going even when it sucks, especially when it sucks - that's when the real growth happens",
					scenario: '',
				},
			],
			explanation:
				"The three P's that make the difference between trying recovery and actually succeeding at it.",
		},
		scenarios: [
			{
				title: 'Daily Recovery Routine',
				content:
					'Practice: Meditate for 10 minutes every morning, even when you feel good. Patience: Some days meditation feels pointless, but you trust the process. Persistence: Keep the routine going even during busy or stressful weeks.',
				btnLabel: 'Stick With It',
			},
			{
				title: 'Learning New Coping Skills',
				content:
					'Practice: Use breathing exercises daily, not just during panic attacks. Patience: Accept that it took months to feel natural instead of forced. Persistence: Continue even when the old habits seem easier and faster.',
				btnLabel: 'Keep Practicing',
			},
		],
	},
	{
		id: 12,
		title: 'R.A.V.E.',
		content: {
			acronyms: [
				{
					letter: 'R',
					meaning: 'Recovery',
					definition:
						'Remember this is an ongoing journey, not a destination you arrive at and forget about',
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Awareness',
					definition:
						"Stay tuned in to your thoughts, feelings, and triggers - don't go on autopilot",
					scenario: '',
				},
				{
					letter: 'V',
					meaning: 'Vigilance',
					definition:
						'Keep your eyes open for warning signs without becoming paranoid about them',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Empowerment',
					definition:
						"Trust yourself to handle whatever comes up - you've got the tools and the strength",
					scenario: '',
				},
			],
			explanation:
				'Your long-term success strategy - staying strong and aware without making recovery feel like a prison.',
		},
		scenarios: [
			{
				title: 'Two Years Into Recovery',
				content:
					'Recovery: Still attend weekly support meetings even though life is stable. Awareness: Notice when work stress builds up before it becomes overwhelming. Vigilance: Recognize old thinking patterns creeping back. Empowerment: Trust your ability to handle challenges without using.',
				btnLabel: 'Stay Strong',
			},
			{
				title: 'Facing a Major Life Change',
				content:
					'Recovery: Remember that major transitions are high-risk times. Awareness: Monitor your stress levels during the move/job change/breakup. Vigilance: Watch for isolation, sleep problems, or negative thinking. Empowerment: Use your support system and coping tools confidently.',
				btnLabel: 'Navigate Change',
			},
		],
	},
	{
		id: 13,
		title: 'R.E.I',
		content: {
			acronyms: [
				{
					letter: 'R',
					meaning: 'Rational',
					definition:
						'Think it through logically - what does the evidence actually say about this situation?',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Emotional',
					definition:
						"Honor your feelings without letting them run the show - they're information, not instructions",
					scenario: '',
				},
				{
					letter: 'I',
					meaning: 'Imagery',
					definition:
						'Use your imagination for good - picture yourself handling things well and feeling proud',
					scenario: '',
				},
			],
			explanation:
				'Balance your head and your heart with some positive visualization - the trifecta of healthy coping.',
		},
		scenarios: [
			{
				title: 'Job Interview Anxiety',
				content:
					"Rational: You're qualified and have prepared well. Emotional: It's normal to feel nervous about important things. Imagery: Visualize yourself speaking confidently, connecting with the interviewer, and walking out feeling proud regardless of the outcome.",
				btnLabel: 'Balance & Visualize',
			},
			{
				title: 'Relationship Conflict',
				content:
					"Rational: This argument doesn't mean the relationship is over. Emotional: You're hurt and that's valid, but don't make permanent decisions from temporary emotions. Imagery: Picture having a calm conversation where you both listen and work together to solve the problem.",
				btnLabel: 'Think & Feel',
			},
		],
	},
	{
		id: 14,
		title: 'S.M.A.R.T.',
		content: {
			acronyms: [
				{
					letter: 'S',
					meaning: 'Specific',
					definition:
						'Get crystal clear about what you want - "get better" is vague, "exercise 3x a week" is specific',
					scenario: '',
				},
				{
					letter: 'M',
					meaning: 'Measurable',
					definition:
						"How will you know you're making progress? You need a way to track and celebrate wins",
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Achievable',
					definition:
						'Set yourself up to succeed, not fail - ambitious is good, impossible is discouraging',
					scenario: '',
				},
				{
					letter: 'R',
					meaning: 'Relevant',
					definition:
						'Make sure this goal actually matters to your life and recovery - not just what sounds impressive',
					scenario: '',
				},
				{
					letter: 'T',
					meaning: 'Time-bound',
					definition:
						'Give yourself a deadline - without one, "someday" becomes "never"',
					scenario: '',
				},
			],
			explanation:
				"The gold standard for setting goals that you'll actually achieve instead of just hope for.",
		},
		scenarios: [
			{
				title: 'Getting Back Into Exercise',
				content:
					'Specific: Walk for 30 minutes. Measurable: Track walks on phone app. Achievable: Start with 3 times per week, not daily. Relevant: Exercise helps with mood and energy in recovery. Time-bound: Build this habit over the next 4 weeks.',
				btnLabel: 'Set SMART Goals',
			},
			{
				title: 'Improving Sleep Habits',
				content:
					'Specific: Be in bed by 10:30 PM with no screens. Measurable: Track bedtime and sleep quality. Achievable: Start with weeknights first. Relevant: Better sleep improves mood and decision-making. Time-bound: Establish routine within 2 weeks.',
				btnLabel: 'Plan Success',
			},
		],
	},
	{
		id: 15,
		title: 'T.A.P.E.',
		content: {
			acronyms: [
				{
					letter: 'T',
					meaning: 'Thoughts',
					definition:
						"What's going through your mind right now? Sometimes we think things without really thinking about them",
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Assumptions',
					definition:
						'What are you taking for granted that might not actually be true? Question your defaults',
					scenario: '',
				},
				{
					letter: 'P',
					meaning: 'Predictions',
					definition:
						'What do you think will happen? Your crystal ball might be foggier than you think',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Evaluations',
					definition:
						'How are you judging yourself and others? Are you being fair, or being a harsh critic?',
					scenario: '',
				},
			],
			explanation:
				"Your mental fact-checker - helping you separate what's actually true from what just feels true.",
		},
		scenarios: [
			{
				title: 'Social Anxiety at a Party',
				content:
					"Thoughts: 'Everyone thinks I'm weird.' Assumptions: People are paying attention to and judging you. Predictions: You'll embarrass yourself and everyone will remember. Evaluations: You're being the worst critic of yourself - would you judge others this harshly?",
				btnLabel: 'Check Reality',
			},
			{
				title: 'Work Performance Worry',
				content:
					"Thoughts: 'I'm going to get fired.' Assumptions: One mistake means you're incompetent. Predictions: Your boss will call you in for a termination meeting. Evaluations: You're catastrophizing - most people make mistakes and keep their jobs.",
				btnLabel: 'Fact Check',
			},
		],
	},
	{
		id: 16,
		title: 'U.R.G.E.',
		content: {
			acronyms: [
				{
					letter: 'U',
					meaning: 'Unwanted',
					definition:
						"Acknowledge that these cravings suck and you didn't ask for them - but they're temporary visitors",
					scenario: '',
				},
				{
					letter: 'R',
					meaning: 'Reduce',
					definition:
						"Find ways to turn down the volume on these urges - they don't have to be so loud",
					scenario: '',
				},
				{
					letter: 'G',
					meaning: 'Gradually',
					definition:
						'This process takes time - be patient with yourself as the urges slowly lose their power',
					scenario: '',
				},
				{
					letter: 'E',
					meaning: 'Eliminate',
					definition:
						'The ultimate goal - getting to a place where these urges rarely show up at all',
					scenario: '',
				},
			],
			explanation:
				'Your step-by-step plan for making cravings less frequent, less intense, and eventually obsolete.',
		},
		scenarios: [
			{
				title: 'Cigarette Cravings',
				content:
					'Unwanted: Accept that nicotine cravings are normal and temporary. Reduce: Use breathing exercises, chew gum, take a walk. Gradually: Notice cravings becoming less frequent over weeks. Eliminate: Eventually go days, then weeks without thinking about smoking.',
				btnLabel: 'Reduce Urges',
			},
			{
				title: 'Shopping Addiction Urges',
				content:
					"Unwanted: Acknowledge the urge to buy things you don't need is part of the addiction. Reduce: Uninstall shopping apps, make a list before going to stores, bring limited cash. Gradually: Practice sitting with the discomfort of wanting something. Eliminate: Find that shopping urges rarely occur.",
				btnLabel: 'Control Impulses',
			},
		],
	},

	{
		id: 17,
		title: 'U.S.A',
		content: {
			acronyms: [
				{
					letter: 'U',
					meaning: 'Unconditional',
					definition:
						"You're worthy of love and respect just because you exist - no performance required",
					scenario: '',
				},
				{
					letter: 'S',
					meaning: 'Self',
					definition:
						'This is about you as a whole person, not just your mistakes or achievements',
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Acceptance',
					definition:
						'Embracing yourself as you are right now, while still working toward who you want to become',
					scenario: '',
				},
			],
			explanation:
				'The foundation of lasting recovery - learning to be on your own team, especially when you mess up.',
		},
		scenarios: [
			{
				title: 'After a Relapse',
				content:
					"Unconditional: Your worth doesn't decrease because you used again. Self: You're a complex person dealing with a difficult challenge, not just 'an addict.' Acceptance: Accept that you slipped while still believing you can get back on track.",
			},
			{
				title: 'Comparing Yourself to Others',
				content:
					"Unconditional: Your value isn't determined by how you stack up against others. Self: Focus on your whole journey, not just where you are right now. Acceptance: Embrace your current progress while working toward your goals without self-criticism.",
			},
		],
	},
	{
		id: 18,
		title: 'W.A.I.T.',
		content: {
			acronyms: [
				{
					letter: 'W',
					meaning: 'Wait',
					definition:
						"Hit the pause button - you don't have to react immediately to every feeling or situation",
					scenario: '',
				},
				{
					letter: 'A',
					meaning: 'Assess',
					definition:
						"Look around and take stock - what's really happening here, and how are you feeling about it?",
					scenario: '',
				},
				{
					letter: 'I',
					meaning: 'Identify',
					definition:
						"Name what you're dealing with - triggers, emotions, options - get clear on the situation",
					scenario: '',
				},
				{
					letter: 'T',
					meaning: 'Take',
					definition:
						'Now make your move - but make it consciously, not impulsively',
					scenario: '',
				},
			],
			explanation:
				"Your emergency brake for impulsive moments - giving yourself space to make choices you'll actually feel good about later.",
		},
		scenarios: [
			{
				title: 'Angry Text Message',
				content:
					"Wait: Don't respond immediately to your ex's nasty text. Assess: You're hurt and angry, but also in a good place in your recovery. Identify: This is a trigger situation, you have options like blocking them or talking to your sponsor. Take: Delete the mean response you typed and call your support person instead.",
			},
			{
				title: 'Sudden Urge to Quit Your Job',
				content:
					"Wait: Don't storm into your boss's office after a bad meeting. Assess: You're frustrated with work but also stressed about money. Identify: This is anger and exhaustion talking, your options include talking to HR, looking for new jobs, or addressing specific issues. Take: Schedule a conversation with your supervisor for next week to discuss concerns professionally.",
			},
		],
	},
];

export default data;
