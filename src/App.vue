<template>
	<div id="layout">
		<Navbar />
		<Hero />
		<div class="container">
			<div class="box">

				<h3 class="is-size-4">クトゥルフ神話TRPG キャラ名刺 ジェネレーター</h3>
				<div class="content">
					<p>クトゥルフ神話TRPGのキャラクターの名刺を作成できるサービスです。作成した画像はダウンロードしてご利用いただけます。</p>
				</div>

				<hr>

				<div id="svg">

					<svg ref="svgCard" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 480" width="640" height="480">
						<defs>
							<path d="M-2.05 0L637.95 0L637.95 480.49L-2.05 480.49L-2.05 0Z" id="dKr5KzJGJ"></path>
							<path d="M-4.76 106.61L645.94 106.61L645.94 183.29L-4.76 183.29L-4.76 106.61Z" id="cd1XwEI7O"></path>
							<path d="M-2.05 0L640 0L640 106.61L-2.05 106.61L-2.05 0Z" id="aXjm7uEPt"></path><path d="M202.31 106.61C202.31 57.73 161.56 18.04 111.36 18.04C61.17 18.04 20.42 57.73 20.42 106.61C20.42 155.49 61.17 195.17 111.36 195.17C161.56 195.17 202.31 155.49 202.31 106.61Z" id="a23QF0LCmy"></path>
							<clipPath id="clipb2oCrBsTz4">
									<use xlink:href="#a23QF0LCmy" opacity="1"></use>
							</clipPath>
							<text id="a46id5ZYn" x="15" y="240" font-size="28" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 0 -36.85314685314688)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="15" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{charaname}}</tspan>
							</text>
							<text id="bFVRAeFsM" x="25" y="235" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -4.755244755244711 0)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="25" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">PL：{{plname}}</tspan>
							</text>
							<text id="c1a41WPUdO" x="250" y="120" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(0.9999996603326221 0.0008242175929060319 -0.0008242175929060319 0.9999996603326221 26.970935368060978 -2.584832003728337)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="234" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">HP</tspan>
							</text>
							<text id="a1YklvJS0Q" x="230" y="156" font-size="28" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 29.93681220882945 -16.219659077839708)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="230" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{hp}}</tspan>
							</text>
							<text id="dy0VNPLww" x="305" y="125" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 11.030026948185991 -7.94467658649593)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="305" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">MP</tspan>
							</text>
							<text id="a4c1XCafGO" x="285" y="150" font-size="28" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(0.9999988650480816 -0.0015066195767254771 0.0015066195767254771 0.9999988650480816 29.07839690845926 -8.614007027322803)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="285" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{mp}}</tspan>
							</text>
							<text id="nfag9cGpI" x="375" y="125" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -2.3776223776224015 -7.922456280636936)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="375" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">SAN</tspan>
							</text>
							<text id="b7088ArgF" x="360" y="151" font-size="26" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 14.786549388111894 -8.97840033658099)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="360" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{san}}</tspan>
							</text>
							<text id="g6fuzZzEpU" x="440" y="125" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -10.699300699300693 -7.922456280636936)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="440" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">アイデア</tspan>
							</text>
							<text id="brU01Oc1x" x="433" y="155" font-size="28" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 12.565067744755254 -15.165915668289301)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="433" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{idea}}</tspan>
							</text>
							<text id="h1szTwRs2n" x="525" y="125" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(0.9999997581892078 -0.0006954290228451121 0.0006954290228451121 0.9999997581892078 -5.649028161569305 -7.554874924292221)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="525" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">幸運</tspan>
							</text>
							<text id="h1DBMPIRSh" x="510" y="150" font-size="28" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 10.974835515984864 -9.086791944972589)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="510" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{luck}}</tspan>
							</text>
							<text id="a1V64eZHLi" x="375" y="165" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 203.28671328671328 -47.54133739951803)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="375" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">知識</tspan>
							</text>
							<text id="d4lEzqZg1" x="558" y="140" font-size="28" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 20.039226398601386 0.011110152929489914)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="558" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{knowledge}}</tspan>
							</text>
							<text id="a1Ha7hLX8d" x="20" y="260" font-size="16" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 0 -0.006993006993013751)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="20" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{message}}</tspan>
							</text>
							<text id="blOGj0aX3" x="20" y="320" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 0 -15.097902097902136)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="20" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">職業：{{job}}</tspan></text>
							<text id="a2JGYtBvHV" x="20" y="350" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 0 -13.076923076923094)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="20" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">性別：{{sex}}</tspan>
							</text>
							<text id="arnbC4waZ" x="20" y="370" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 0 0)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="20" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">年齢：{{age}}</tspan>
							</text>
							<path d="M616.56 195.17C621.07 195.17 624.73 198.83 624.73 203.35C624.73 226.68 624.73 288.5 624.73 311.83C624.73 316.34 621.07 320 616.56 320C540.76 320 321.55 320 245.75 320C241.24 320 237.58 316.34 237.58 311.83C237.58 288.5 237.58 226.68 237.58 203.35C237.58 198.83 241.24 195.17 245.75 195.17C321.55 195.17 540.76 195.17 616.56 195.17Z" id="b7inVoYuv"></path>
							<path d="M616.4 329.74C621 329.74 624.73 333.47 624.73 338.07C624.73 361.84 624.73 424.84 624.73 448.62C624.73 453.22 621 456.94 616.4 456.94C540.64 456.94 321.67 456.94 245.91 456.94C241.31 456.94 237.58 453.22 237.58 448.62C237.58 424.84 237.58 361.84 237.58 338.07C237.58 333.47 241.31 329.74 245.91 329.74C321.67 329.74 540.64 329.74 616.4 329.74Z" id="e1xsVNstGw"></path>
							<text id="b2B7qDscsV" x="250" y="210" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -3.2977266897719346 -6.954545454545439)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="250" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">能力値</tspan>
							</text>
							<path d="" id="j4t3no7l6E"></path>
							<path d="" id="a1Qe3IKd8z"></path>
							<path d="M240.75 232.44L609.48 232.44L609.48 235.17L240.75 235.17L240.75 232.44Z" id="bAbc5Wqq"></path>
							<text id="ja1BXPEgg" x="250" y="245" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 0 -0.8076923076923777)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="250" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">STR ：{{str}}</tspan>
									<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">CON：{{con}}</tspan>
									<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">SIZ  ：{{siz}}</tspan>
							</text>
							<text id="d1F2Kqy0yO" x="250" y="245" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 126.26609425970202 -0.8076923076923777)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
								<tspan x="250" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">DEX：{{dex}}</tspan>
								<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">APP ：{{app}}</tspan>
								<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">EDU：{{edu}}</tspan>
							</text>
							<text id="bmQGDTu0W" x="250" y="245" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 243.14415370026148 -0.8076923076923777)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
								<tspan x="250" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">INT ：{{int}}</tspan>
								<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">POW：{{pow}}</tspan>
								<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">DB：{{db}}</tspan>
							</text>
							<text id="ibcgX6geq" x="250" y="330" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 0 6.751748251748268)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="250" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">主な技能</tspan>
							</text>
							<path d="M240.75 364.43L609.48 364.43L609.48 367.16L240.75 367.16L240.75 364.43Z" id="aev5SDCVe"></path>
							<text id="am8HI88iG" x="250" y="380" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 0 -7.132867132867091)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="250" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[0].name}}：{{skill[0].value}}</tspan>
									<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[1].name}}：{{skill[1].value}}</tspan>
									<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[2].name}}：{{skill[2].value}}</tspan>
							</text>
							<text id="c7Ye6MKEHt" x="250" y="380" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 122.47227870026148 -7.132867132867091)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="250" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[3].name}}：{{skill[3].value}}</tspan>
									<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[4].name}}：{{skill[4].value}}</tspan>
									<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[5].name}}：{{skill[5].value}}</tspan>
							</text>
							<text id="e10hvjl0bQ" x="250" y="380" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 243.14415370026148 -7.132867132867091)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="250" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[6].name}}：{{skill[6].value}}</tspan>
									<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[7].name}}：{{skill[7].value}}</tspan>
									<tspan x="250" dy="1.2em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">{{skill[8].name}}：{{skill[8].value}}</tspan>
							</text>
							<path d="M198.42 412.73C209.47 412.73 218.42 421.68 218.42 432.73C218.42 437.57 218.42 432.1 218.42 436.94C218.42 447.99 209.47 456.94 198.42 456.94C162.24 456.94 73.69 456.94 37.51 456.94C26.46 456.94 17.51 447.99 17.51 436.94C17.51 432.1 17.51 437.57 17.51 432.73C17.51 421.68 26.46 412.73 37.51 412.73C73.69 412.73 162.24 412.73 198.42 412.73Z" id="a95fbDayoQ"></path>
							<text id="dcawjDsiE" x="65" y="430" font-size="18" font-family="Headland One" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -35.24393575174818 -7.223776223776326)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
									<tspan x="65" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">クトゥルフ神話TRPG</tspan>
							</text>
						</defs>
						<g>
							<g>
									<g>
											<use xlink:href="#dKr5KzJGJ" opacity="1" fill="#fbfbfb" fill-opacity="1"></use>
									</g>
									<g>
											<g>
													<filter id="shadow5721740" x="-33.76" y="77.61" width="708.7" height="137.68" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse">
															<feFlood></feFlood>
															<feComposite in2="SourceAlpha" operator="in"></feComposite>
															<feGaussianBlur stdDeviation="3.16"></feGaussianBlur>
															<feOffset dx="0" dy="3" result="afterOffset"></feOffset>
															<feFlood flood-color="#747474" flood-opacity="0.5"></feFlood>
															<feComposite in2="afterOffset" operator="in"></feComposite>
															<feMorphology operator="dilate" radius="1"></feMorphology>
															<feComposite in2="SourceAlpha" operator="out"></feComposite>
													</filter>
													<path d="M-4.76 106.61L645.94 106.61L645.94 183.29L-4.76 183.29L-4.76 106.61Z" id="alOrcDvqC" fill="white" fill-opacity="1" filter="url(#shadow5721740)"></path>
											</g>
											<use xlink:href="#cd1XwEI7O" opacity="1" fill="#ffffff" fill-opacity="1"></use>
									</g>
									<g>
											<use xlink:href="#aXjm7uEPt" opacity="1" fill="#363636" fill-opacity="1"></use>
									</g>
									<g>
										<g clip-path="url(#clipb2oCrBsTz4)" opacity="1">
													<image xlink:href="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4ge4SUNDX1BST0ZJTEUAAQEAAAeoYXBwbAIgAABtbnRyUkdCIFhZWiAH2QACABkACwAaAAthY3NwQVBQTAAAAABhcHBsAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAAG9kc2NtAAABeAAABWxjcHJ0AAAG5AAAADh3dHB0AAAHHAAAABRyWFlaAAAHMAAAABRnWFlaAAAHRAAAABRiWFlaAAAHWAAAABRyVFJDAAAHbAAAAA5jaGFkAAAHfAAAACxiVFJDAAAHbAAAAA5nVFJDAAAHbAAAAA5kZXNjAAAAAAAAABRHZW5lcmljIFJHQiBQcm9maWxlAAAAAAAAAAAAAAAUR2VuZXJpYyBSR0IgUHJvZmlsZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbWx1YwAAAAAAAAAeAAAADHNrU0sAAAAoAAABeGhySFIAAAAoAAABoGNhRVMAAAAkAAAByHB0QlIAAAAmAAAB7HVrVUEAAAAqAAACEmZyRlUAAAAoAAACPHpoVFcAAAAWAAACZGl0SVQAAAAoAAACem5iTk8AAAAmAAAComtvS1IAAAAWAAACyGNzQ1oAAAAiAAAC3mhlSUwAAAAeAAADAGRlREUAAAAsAAADHmh1SFUAAAAoAAADSnN2U0UAAAAmAAAConpoQ04AAAAWAAADcmphSlAAAAAaAAADiHJvUk8AAAAkAAADomVsR1IAAAAiAAADxnB0UE8AAAAmAAAD6G5sTkwAAAAoAAAEDmVzRVMAAAAmAAAD6HRoVEgAAAAkAAAENnRyVFIAAAAiAAAEWmZpRkkAAAAoAAAEfHBsUEwAAAAsAAAEpHJ1UlUAAAAiAAAE0GFyRUcAAAAmAAAE8mVuVVMAAAAmAAAFGGRhREsAAAAuAAAFPgBWAWEAZQBvAGIAZQBjAG4A/QAgAFIARwBCACAAcAByAG8AZgBpAGwARwBlAG4AZQByAGkBDQBrAGkAIABSAEcAQgAgAHAAcgBvAGYAaQBsAFAAZQByAGYAaQBsACAAUgBHAEIAIABnAGUAbgDoAHIAaQBjAFAAZQByAGYAaQBsACAAUgBHAEIAIABHAGUAbgDpAHIAaQBjAG8EFwQwBDMEMAQ7BEwEPQQ4BDkAIAQ/BEAEPgREBDAEOQQ7ACAAUgBHAEIAUAByAG8AZgBpAGwAIABnAOkAbgDpAHIAaQBxAHUAZQAgAFIAVgBCkBp1KAAgAFIARwBCACCCcl9pY8+P8ABQAHIAbwBmAGkAbABvACAAUgBHAEIAIABnAGUAbgBlAHIAaQBjAG8ARwBlAG4AZQByAGkAcwBrACAAUgBHAEIALQBwAHIAbwBmAGkAbMd8vBgAIABSAEcAQgAg1QS4XNMMx3wATwBiAGUAYwBuAP0AIABSAEcAQgAgAHAAcgBvAGYAaQBsBeQF6AXVBeQF2QXcACAAUgBHAEIAIAXbBdwF3AXZAEEAbABsAGcAZQBtAGUAaQBuAGUAcwAgAFIARwBCAC0AUAByAG8AZgBpAGwAwQBsAHQAYQBsAOEAbgBvAHMAIABSAEcAQgAgAHAAcgBvAGYAaQBsZm6QGgAgAFIARwBCACBjz4/wZYdO9k4AgiwAIABSAEcAQgAgMNcw7TDVMKEwpDDrAFAAcgBvAGYAaQBsACAAUgBHAEIAIABnAGUAbgBlAHIAaQBjA5MDtQO9A7kDugPMACADwAPBA78DxgOvA7sAIABSAEcAQgBQAGUAcgBmAGkAbAAgAFIARwBCACAAZwBlAG4A6QByAGkAYwBvAEEAbABnAGUAbQBlAGUAbgAgAFIARwBCAC0AcAByAG8AZgBpAGUAbA5CDhsOIw5EDh8OJQ5MACAAUgBHAEIAIA4XDjEOSA4nDkQOGwBHAGUAbgBlAGwAIABSAEcAQgAgAFAAcgBvAGYAaQBsAGkAWQBsAGUAaQBuAGUAbgAgAFIARwBCAC0AcAByAG8AZgBpAGkAbABpAFUAbgBpAHcAZQByAHMAYQBsAG4AeQAgAHAAcgBvAGYAaQBsACAAUgBHAEIEHgQxBEkEOAQ5ACAEPwRABD4ERAQ4BDsETAAgAFIARwBCBkUGRAZBACAGKgY5BjEGSgZBACAAUgBHAEIAIAYnBkQGOQYnBkUARwBlAG4AZQByAGkAYwAgAFIARwBCACAAUAByAG8AZgBpAGwAZQBHAGUAbgBlAHIAZQBsACAAUgBHAEIALQBiAGUAcwBrAHIAaQB2AGUAbABzAGV0ZXh0AAAAAENvcHlyaWdodCAyMDA3IEFwcGxlIEluYy4sIGFsbCByaWdodHMgcmVzZXJ2ZWQuAFhZWiAAAAAAAADzUgABAAAAARbPWFlaIAAAAAAAAHRNAAA97gAAA9BYWVogAAAAAAAAWnUAAKxzAAAXNFhZWiAAAAAAAAAoGgAAFZ8AALg2Y3VydgAAAAAAAAABAc0AAHNmMzIAAAAAAAEMQgAABd7///MmAAAHkgAA/ZH///ui///9owAAA9wAAMBs/+EAQEV4aWYAAE1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAALOgAwAEAAAAAQAAALMAAAAA/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAswCzAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/tIr2DxwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPG/jF8YrH4SWOjzz6PPrl/rk95HZWUd4unwiHT1tmvJ57xra9ZNjXtqkcaWshkMjEsgQk5VaqpJaXcr2V7bb6690a0qTqt62S3e+97afJnz/wD8Nn/9U2/8vH/8Fqw+t/3P/Jv/ALU3+qf3/wDyX/7YP+Gz/wDqm3/l4/8A4LUfW/7n/k3/ANqH1T+//wCS/wD2wf8ADZ//AFTb/wAvH/8ABaj63/c/8m/+1D6p/f8A/Jf/ALYP+Gz/APqm3/l4/wD4LUfW/wC5/wCTf/ah9U/v/wDkv/2wf8Nn/wDVNv8Ay8f/AMFqPrf9z/yb/wC1D6p/f/8AJf8A7YP+Gz/+qbf+Xj/+C1H1v+5/5N/9qH1T+/8A+S//AGwf8Nn/APVNv/Lx/wDwWo+t/wBz/wAm/wDtQ+qf3/8AyX/7YP8Ahs//AKpt/wCXj/8AgtR9b/uf+Tf/AGofVP7/AP5L/wDbD4v2zozIgm+HLxxFgJHi8WrNIqZ+Zkifw3CsjAZIRpowx4Lr1o+t/wBz/wAm/wDtQ+qf3/8AyX/7Zn2fo2q2uu6PpOuWO82Ws6bY6rZmVdkhtdRtYru38xAWCv5Uyb1DNtbIyetdafMlJbNJr56nI002num0/VPU0qYgoAKACgAoAKACgAoAKACgAoAKAPhv9s//AJpv/wBzj/7q1ceL/wCXf/b/AP7admE/5ef9u/8Atx5V8IP2fv8Aha/hq+8Rf8Jd/YP2PXbnRfsf9g/2p5v2ew0y++0/aP7a07Zv/tHyvJ8h9vk7/NbzNiZ0qHtYuXNa0mtr9E+67mtWv7OSjy3ur3vbdtdn2PVf+GMf+qk/+Wd/+FNafVP7/wD5L/8AbGX1v+5/5N/9qH/DGP8A1Un/AMs7/wDCmj6p/f8A/Jf/ALYPrf8Ac/8AJv8A7UP+GMf+qk/+Wd/+FNH1T+//AOS//bB9b/uf+Tf/AGof8MY/9VJ/8s7/APCmj6p/f/8AJf8A7YPrf9z/AMm/+1D/AIYx/wCqk/8Alnf/AIU0fVP7/wD5L/8AbB9b/uf+Tf8A2of8MY/9VJ/8s7/8KaPqn9//AMl/+2D63/c/8m/+1D/hjH/qpP8A5Z3/AOFNH1T+/wD+S/8A2wfW/wC5/wCTf/anxx4o0X/hG/EviLw79p+2/wBg67q2i/bPJ+z/AGv+y9QuLH7T9n82fyPP8jzfJ8+byt+zzZNu88slyylHflk1fvZ2OuL5oxl/Mk/vVz9cvhh/yTX4ef8AYjeEv/TBp9enT/hw/wAEf/SUeXU/iVP8cv8A0pnc1ZAUAFABQAUAFABQAUAFABQAUAFAHw3+2f8A803/AO5x/wDdWrjxf/Lv/t//ANtOzCf8vP8At3/242f2a/Elh4Q+CPjXxNqe42WjeK9YvJUQgSTsmgeGFgtoi3yia6uHitoi3yiSVSxC5NPDyUaM5PZSk/8AyWP5ixEXKtCK3cUv/JpHzP4r+PfxO8UanNfJ4o1Tw/aGRjaaX4evrjSra0h3ExxNLaPDc3rgf6ye8llaRslVjj2xJzyr1JO/M12UXb8tX82zojQpxXwqT6uSv+ex7p8APj/4jvvEdh4J8bX76xb6w5tdH1i6C/2haahtZoLS7nVVa9t71gYIpZw91FdPCGmeByIt6FeTkoTd77N738+9/PW5hXoRUXOCtbddLd16H3fXYcYUAFABQAUAfjh8T/8AkpfxD/7Hnxb/AOn/AFCvKqfxKn+OX/pTPVp/w4f4I/8ApKP1W+GH/JNfh5/2I3hL/wBMGn16VP8Ahw/wR/8ASUebU/iVP8cv/SmdzVkBQAUAFABQAUAFABQAUAFABQAUAfDf7Z//ADTf/ucf/dWrjxf/AC7/AO3/AP207MJ/y8/7d/8AbjO+EHhm+8Yfs1fEjw9pimTUbzxTfT2UIOGubnTNO8H6rFaoTxvu3shbJuIXfKNxC5IVKLnh6kVu5NrzaUXb52HVlyYinJ7KKv8ANzTf4nxhLFLBLJDPHJDNDI8U0UqNHLFLGxSSOSNwHSRHBV0YBlYEMAQa5Dr31PYfgJ4U1PxR8TvDD2MMhtPD+qWXiHVLsK3k2ltpVwl5EssgGA97cwxWkMed0jSs2PLjlZNaMXKpH+61Jv01/F2RlXmo05X3knFL10f3I/WOvTPMMrXNa07w5o+pa7q9wtrpulWk17eTtyVihUsVRcgyTStiKCJfnmmdIkBd1BUmopyb0SuxpOTSWrbsvVnyl8Nf2oZfF/jqPw3r2jado+k61cPa+H7u3luDdW92zH7FaarJPM9vctfYFvHNawWgjvHhj8qSOVpIuanieafLJJKTtF63v0v3vtp1Omph+WHMm3Jay7W6tddPPfc+wq6jlCgD8cPif/yUv4h/9jz4t/8AT/qFeVU/iVP8cv8A0pnq0/4cP8Ef/SUfqt8MP+Sa/Dz/ALEbwl/6YNPr0qf8OH+CP/pKPNqfxKn+OX/pTO5qyAoAKACgAoAKACgAoAKACgAoAKAPhv8AbP8A+ab/APc4/wDurVx4v/l3/wBv/wDtp2YT/l5/27/7cdz+yB/yTXXP+x51P/0weGavC/w5f43/AOkxIxX8Rf4F/wClSPYfE3wf+GvjC+bU/EPhLT7zUJCDNewS32mXNyw6Pdy6VdWT3b4wu+5Mr7QF3bQBWsqVObvKKb76pv1aav8AMyjVqQ0jJpdtH+dzqvDfhTw54QsP7N8M6NY6NZFvMkis4QjTyAYEtzOxa4upgvyiW5llkCgLu2gCqjGMVaKSXl+vf5kylKTvJtvzOgqiT4G/as+KH2++i+G+jXObPTZIr3xNJE3y3Go4EtlpZYHDx2CMt3crllN5JAjbJrFxXFial37NdNZevRfLr5+jO3DU7L2j3ekfTq/m9F8+6PjOKWSGSOaGR4ponSWKWNikkckbB0kR1IZXRgGVlIKsAQciuQ699z9bfgx8Q4/iP4G07V5pEOtWQGl+IIVwpXU7ZFzchB92LUYTHex4GxGmkt1JaB8epSqe0gn12l6/8Hc8urD2c2um8fR/5ao9YrQzPxw+J/8AyUv4h/8AY8+Lf/T/AKhXlVP4lT/HL/0pnq0/4cP8Ef8A0lH6rfDD/kmvw8/7Ebwl/wCmDT69Kn/Dh/gj/wCko82p/Eqf45f+lM7mrICgAoAKACgAoAKACgAoAKACgAoA+G/2z/8Amm//AHOP/urVx4v/AJd/9v8A/tp2YT/l5/27/wC3Hc/sgf8AJNdc/wCx51P/ANMHhmrwv8OX+N/+kxIxX8Rf4F/6VI+o7y7tbC1ub6+uIbSzs4Jbm6uriRYoLe3gRpJpppHIVI40VndmIAUEk10tpat2XVv/ADObc+FPF37Xurx61ND4K0HSJNDtpmjjvNeiv5rzUo0bBuI4bS+sVsIpsMYY5ftMwjKSTCORmgj4pYp39xK3eV7v8Vb53O2OFVvfk79o20fq73J9S/bFuJtBli0vwf8AYvEc0DRLd3Gppd6XZzMrKLuOD7JHPdFDiSO1mMSBvlkmmRSJW8VppH3vN6Lz7v8AD1EsL72srx+5/r/Xrp8V3d3c391c317PLdXl5cTXV1czOXmuLm4kaWeaV2yXklkdndicszEnrXI2223q27t929zsSsklstEV6QHvP7PXxH/4QDxzbwX8/leHfExh0nV97YhtZmkI0zVGyQqizuZWinkYhY7G6u5CGZEFbUKnJPV+7LR+vR/J/mzDEU+eF0vejqu7XVfr6rzP1Pr0jzj8cPif/wAlL+If/Y8+Lf8A0/6hXlVP4lT/ABy/9KZ6tP8Ahw/wR/8ASUfqt8MP+Sa/Dz/sRvCX/pg0+vSp/wAOH+CP/pKPNqfxKn+OX/pTO5qyAoAKACgAoAKACgAoAKACgAoAKAPhv9s//mm//c4/+6tXHi/+Xf8A2/8A+2nZhP8Al5/27/7cdz+yB/yTXXP+x51P/wBMHhmrwv8ADl/jf/pMSMV/EX+Bf+lSPHf2kvjWfEd5ceAfC90f7A0+4Ka9fwNxrOoW8nNlC6n59MsZly7A7L28Teube3hknyxFbmbhF6L4n3fb0X5muHpWXtJLV/Cn0T6+r/L1PkSuU6goAKACgAoA/Un9nP4iP478CRWl/K0uveFDb6RqUjktJdWpjc6TfuxyWe4toZLed3YyS3VlcTtgSrXpUKnPBXfvR0f6P5rr1aZ51eHJO62l7y9eq+T19Gj87/if/wAlL+If/Y8+Lf8A0/6hXBU/iVP8cv8A0pndT/hw/wAEf/SUfqt8MP8Akmvw8/7Ebwl/6YNPr0qf8OH+CP8A6Sjzan8Sp/jl/wClM7mrICgAoAKACgAoAKACgAoAKACgAoA+G/2z/wDmm/8A3OP/ALq1ceL/AOXf/b//ALadmE/5ef8Abv8A7cUf2cPi38PfAXgfVdH8WeIP7K1G58V32pQ2/wDZWt32+ym0jQ7WObztN028gXdPZ3KeW8qzDy9zRhHjZlQqwhBqUrNyb2k9LLsn2Y8RSqTmnGN1ypXulreT6tdznr3w3+yRd3U9zH8RPGFik8ryi0tLHV2toN7FvLhN74FvLoxpnavnXM0m0DdIzZYpxwzd+ea8kn+sG/vbGpYpL4IvzbV/wmir/wAIl+yX/wBFP8c/+C+9/wDneUuXDf8APyf3P/5AfNif+fcPvX/ywP8AhEv2S/8Aop/jn/wX3v8A87yjlw3/AD8n9z/+QDmxP/PuH3r/AOWB/wAIl+yX/wBFP8c/+C+9/wDneUcuG/5+T+5//IBzYn/n3D71/wDLA/4RL9kv/op/jn/wX3v/AM7yjlw3/Pyf3P8A+QDmxP8Az7h96/8Algf8Il+yX/0U/wAc/wDgvvf/AJ3lHLhv+fk/uf8A8gHNif8An3D71/8ALD2X4c/ED9m34X2F9Y+G/GN/I2pzQTahfano3ii5vbo2ySJbI7QeG7S2SOATTtGkNtF808rMWyMawqYemnyyeu7ak297fZ6XMqkMRUacorTZKUba+sn/AEj4a8d6lZaz448Zaxps32nTtW8V+ItSsLjy5oftFlfaveXVrN5NxHFPF5sEscnlzxRzJu2yRo4ZRxzac5tapyk0/JtvqdkE1CCe6jFP1SVz9ZPhh/yTX4ef9iN4S/8ATBp9enT/AIcP8Ef/AElHmVP4lT/HL/0pnc1ZAUAFABQAUAFABQAUAFABQAUAFAHw3+2f/wA03/7nH/3Vq48X/wAu/wDt/wD9tOzCf8vP+3f/AG4+G64zsCgAoAKACgAoAKACgAoA/Y/4Yf8AJNfh5/2I3hL/ANMGn16tP+HD/BH/ANJR5VT+JU/xy/8ASmdzVkBQAUAFABQAUAFABQAUAFABQAUAfFP7ZOm39xY+A9ThtZ5bDT5/Etve3UcbPDazagugvZrO6giP7QLG68suQGMTKDnAPJi07QfRc1368tvvszrwrV5pvV8rS725r/mfBtcR2hQAUAFABQAUAFABQA+KKSaRIYY3lllYJHFEjSSSOxwqIigs7MTgKoJJOAM0B5s/Zb4fWV1pvgLwRp19C9te2HhDw1ZXlvKCskF1a6NZQXEMinlXimjdHB5DKQa9aCahBPdRin62VzyZtOc2tU5SafdNtnX1RIUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAf/Z" x="0" y="0" width="170" height="165.24" transform="matrix(1.0699300699300704 0 0 -1.071942446043165 20.419580419580463 195.17482517482523)"></image>
											</g>
											<g>
													<use xlink:href="#a23QF0LCmy" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"></use>
											</g>
									</g>
									<g id="avjK6fd71">
											<use xlink:href="#a46id5ZYn" opacity="1" fill="#000000" fill-opacity="1"></use>
									</g>
									<g id="b19R3AuCRu">
											<use xlink:href="#bFVRAeFsM" opacity="1" fill="#353535" fill-opacity="1"></use>
									</g>
									<g id="d1qfgngiEL">
											<use xlink:href="#c1a41WPUdO" opacity="1" fill="#7e7e7e" fill-opacity="1"></use>
									</g>
									<g id="bSlhOpZZS">
											<use xlink:href="#dy0VNPLww" opacity="1" fill="#7b7b7b" fill-opacity="1"></use>
									</g>
									<g id="behnd5OId">
											<use xlink:href="#nfag9cGpI" opacity="1" fill="#757575" fill-opacity="1"></use>
									</g>
									<g id="cHTVJUYLy">
											<use xlink:href="#g6fuzZzEpU" opacity="1" fill="#7e7e7e" fill-opacity="1"></use>
									</g>
									<g id="b3zpHIhbuA">
											<use xlink:href="#h1szTwRs2n" opacity="1" fill="#757575" fill-opacity="1"></use>
									</g>
									<g id="d1FHdPvFdT">
											<use xlink:href="#a1V64eZHLi" opacity="1" fill="#6f6f6f" fill-opacity="1"></use>
									</g>
									<g id="c6905MaTJn">
											<use xlink:href="#a1YklvJS0Q" opacity="1" fill="#7a7a7a" fill-opacity="1"></use>
									</g>
									<g id="a6D5FRn04">
											<use xlink:href="#a4c1XCafGO" opacity="1" fill="#7a7a7a" fill-opacity="1"></use>
									</g>
									<g id="bJWPXyIsr">
											<use xlink:href="#b7088ArgF" opacity="1" fill="#787878" fill-opacity="1"></use>
									</g>
									<g id="dEwxDtuKh">
											<use xlink:href="#brU01Oc1x" opacity="1" fill="#7d7d7d" fill-opacity="1"></use>
									</g>
									<g id="e8qRqk0dWr">
											<use xlink:href="#h1DBMPIRSh" opacity="1" fill="#808080" fill-opacity="1"></use>
									</g>
									<g id="aQ22n6IRZ">
											<use xlink:href="#d4lEzqZg1" opacity="1" fill="#7d7d7d" fill-opacity="1"></use>
									</g>
									<g id="dChDfXlur">
											<use xlink:href="#a1Ha7hLX8d" opacity="1" fill="#000000" fill-opacity="1"></use>
									</g>
									<g id="a9cifFI6P">
											<use xlink:href="#a2JGYtBvHV" opacity="1" fill="#3e3e3e" fill-opacity="1"></use>
									</g>
									<g id="b1rjc6EixM">
											<use xlink:href="#arnbC4waZ" opacity="1" fill="#454545" fill-opacity="1"></use>
									</g>
									<g id="b4ArQhMD8p">
										<use xlink:href="#blOGj0aX3" opacity="1" fill="#3f3f3f" fill-opacity="1"></use>
									</g>
									<g>
											<g>
													<filter id="shadow13701939" x="226.58" y="184.17" width="410.14" height="147.83" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse">
															<feFlood></feFlood>
															<feComposite in2="SourceAlpha" operator="in"></feComposite>
															<feGaussianBlur stdDeviation="1"></feGaussianBlur>
															<feOffset dx="1" dy="1" result="afterOffset"></feOffset>
															<feFlood flood-color="#757575" flood-opacity="0.5"></feFlood>
															<feComposite in2="afterOffset" operator="in"></feComposite>
															<feMorphology operator="dilate" radius="3"></feMorphology>
															<feComposite in2="SourceAlpha" operator="out"></feComposite>
													</filter>
													<path d="M616.56 195.17C621.07 195.17 624.73 198.83 624.73 203.35C624.73 226.68 624.73 288.5 624.73 311.83C624.73 316.34 621.07 320 616.56 320C540.76 320 321.55 320 245.75 320C241.24 320 237.58 316.34 237.58 311.83C237.58 288.5 237.58 226.68 237.58 203.35C237.58 198.83 241.24 195.17 245.75 195.17C321.55 195.17 540.76 195.17 616.56 195.17Z" id="aznIPqFAu" fill="white" fill-opacity="1" filter="url(#shadow13701939)"></path>
											</g>
											<use xlink:href="#b7inVoYuv" opacity="1" fill="#ffffff" fill-opacity="1"></use>
									</g>
									<g>
											<g>
													<filter id="shadow6311671" x="226.58" y="318.74" width="410.14" height="150.2" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse">
															<feFlood></feFlood>
															<feComposite in2="SourceAlpha" operator="in"></feComposite>
															<feGaussianBlur stdDeviation="1"></feGaussianBlur>
															<feOffset dx="1" dy="1" result="afterOffset"></feOffset>
															<feFlood flood-color="#757575" flood-opacity="0.5"></feFlood>
															<feComposite in2="afterOffset" operator="in"></feComposite>
															<feMorphology operator="dilate" radius="3"></feMorphology>
															<feComposite in2="SourceAlpha" operator="out"></feComposite>
													</filter>
													<path d="M616.4 329.74C621 329.74 624.73 333.47 624.73 338.07C624.73 361.84 624.73 424.84 624.73 448.62C624.73 453.22 621 456.94 616.4 456.94C540.64 456.94 321.67 456.94 245.91 456.94C241.31 456.94 237.58 453.22 237.58 448.62C237.58 424.84 237.58 361.84 237.58 338.07C237.58 333.47 241.31 329.74 245.91 329.74C321.67 329.74 540.64 329.74 616.4 329.74Z" id="a1XtxxeLnQ" fill="white" fill-opacity="1" filter="url(#shadow6311671)"></path>
											</g>
											<use xlink:href="#e1xsVNstGw" opacity="1" fill="#ffffff" fill-opacity="1"></use>
									</g>
									<g id="b5JX5JH8aW">
											<use xlink:href="#b2B7qDscsV" opacity="1" fill="#818181" fill-opacity="1"></use>
									</g>
									<g>
											<g>
													<use xlink:href="#j4t3no7l6E" opacity="1" fill-opacity="0" stroke="#3c1128" stroke-width="1" stroke-opacity="1"></use>
											</g>
									</g>
									<g>
											<g>
													<use xlink:href="#a1Qe3IKd8z" opacity="1" fill-opacity="0" stroke="#3c1128" stroke-width="1" stroke-opacity="1"></use>
											</g>
									</g>
									<g>
											<use xlink:href="#bAbc5Wqq" opacity="1" fill="#cbcbcb" fill-opacity="1"></use>
									</g>
									<g id="a10MVcFgR6">
											<use xlink:href="#ja1BXPEgg" opacity="1" fill="#998f8f" fill-opacity="1"></use>
									</g>
									<g id="b26B2jQQqU">
											<use xlink:href="#ibcgX6geq" opacity="1" fill="#988e8e" fill-opacity="1"></use>
									</g>
									<g>
											<use xlink:href="#aev5SDCVe" opacity="1" fill="#cbcbcb" fill-opacity="1"></use>
									</g>
									<g id="aVe55oW4p">
											<use xlink:href="#am8HI88iG" opacity="1" fill="#988e8e" fill-opacity="1"></use>
									</g>
									<g id="c6jFditrHP">
											<use xlink:href="#c7Ye6MKEHt" opacity="1" fill="#988e8e" fill-opacity="1"></use>
									</g>
									<g id="a1GZem2K2Q">
											<use xlink:href="#e10hvjl0bQ" opacity="1" fill="#988e8e" fill-opacity="1"></use>
									</g>
									<g>
											<use xlink:href="#a95fbDayoQ" opacity="1" fill="#363636" fill-opacity="1"></use>
									</g>
									<g id="e1ByRA2BLA">
											<use xlink:href="#dcawjDsiE" opacity="1" fill="#ffffff" fill-opacity="1"></use>
									</g>
									<g id="trewq">
										<use xlink:href="qwert" opacity="1" fill="#363636" fill-opacity="1"></use>
									</g>
									<g id="a3NY00jXPr">
										<use xlink:href="#d1F2Kqy0yO" opacity="1" fill="#998f8f" fill-opacity="1"></use>
									</g>
									<g id="g9nil9eel">
										<use xlink:href="#bmQGDTu0W" opacity="1" fill="#998f8f" fill-opacity="1"></use>
									</g>
							</g>
						</g>
					</svg>

				</div>

				<div class="buttons is-centered">
					<a v-if="isloading" class="button is-info is-loading">
						<span class="icon"><i class="fab fa-twitter"></i></span>
						<span>Twitterでシェアしよう！</span>
					</a>
					<a v-else class="button is-info" @click="create()">
						<span class="icon"><i class="fab fa-twitter"></i></span>
						<span>Twitterでシェアしよう！</span>
					</a>
				</div>

				<section>
					<b-tabs type="is-toggle" expanded>
						<b-tab-item label="Profile">
							<b-field label="Character Name">
								<b-input v-model="charaname"></b-input>
							</b-field>
							
							<b-field label="Player Name">
								<b-input v-model="plname"></b-input>
							</b-field>

							<section>
								<b-field label="職業">
									<b-select v-model="job" expanded>
										<option v-for="option in jobs" :value="option.job" :key="option.job">
											{{ option.job }}
										</option>
									</b-select>
								</b-field>
							</section>

							<b-field label="Sex">
								<div class="block">
									<b-radio v-model="sex" native-value="男性">男性</b-radio>
									<b-radio v-model="sex" native-value="女性">女性</b-radio>
									<b-radio v-model="sex" native-value="その他">その他</b-radio>
								</div>
							</b-field>

							<b-field label="Age">
								<b-input v-model.number="age" type="number"></b-input>
							</b-field>

							<b-field label="Message">
								<b-input v-model="message" maxlength="13"></b-input>
							</b-field>

						</b-tab-item>

						<b-tab-item label="Capacity">
							<div class="columns">
								<div class="column">
									<b-field label="STR">
										<b-input v-model.number="str" type="number"></b-input>
									</b-field>
									<b-field label="CON">
										<b-input v-model.number="con" type="number"></b-input>
									</b-field>
									<b-field label="SIZ">
										<b-input v-model.number="siz" type="number"></b-input>
									</b-field>
								</div>
								<div class="column">
									<b-field label="DEX">
										<b-input v-model.number="dex" type="number"></b-input>
									</b-field>
									<b-field label="APP">
										<b-input v-model.number="app" type="number"></b-input>
									</b-field>
									<b-field label="EDU">
										<b-input v-model.number="edu" type="number"></b-input>
									</b-field>
								</div>
								<div class="column">
									<b-field label="INT">
										<b-input v-model.number="int" type="number"></b-input>
									</b-field>
									<b-field label="POW">
										<b-input v-model.number="pow" type="number"></b-input>
									</b-field>
								</div>
							</div>
						</b-tab-item>

						<b-tab-item label="Skill">
							<div class="columns">
								<div class="column">
									<b-field label="技能1">
										<b-field>
											<b-autocomplete v-model="skill[0].name" :data="filteredSkillArray(0)" @select="option => skill[0].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[0].value"></b-input>
										</b-field>
									</b-field>
									<b-field label="技能2">
										<b-field>
											<b-autocomplete v-model="skill[1].name" :data="filteredSkillArray(1)" @select="option => skill[1].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[1].value"></b-input>
										</b-field>
									</b-field>
									<b-field label="技能3">
										<b-field>
											<b-autocomplete v-model="skill[2].name" :data="filteredSkillArray(2)" @select="option => skill[2].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[2].value"></b-input>
										</b-field>
									</b-field>
								</div>

								<div class="column">
									<b-field label="技能4">
										<b-field>
											<b-autocomplete v-model="skill[3].name" :data="filteredSkillArray(3)" @select="option => skill[3].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[3].value"></b-input>
										</b-field>
									</b-field>
									<b-field label="技能5">
										<b-field>
											<b-autocomplete v-model="skill[4].name" :data="filteredSkillArray(4)" @select="option => skill[4].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[4].value"></b-input>
										</b-field>
									</b-field>
									<b-field label="技能6">
										<b-field>
											<b-autocomplete v-model="skill[5].name" :data="filteredSkillArray(5)" @select="option => skill[5].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[5].value"></b-input>
										</b-field>
									</b-field>
								</div>

								<div class="column">
									<b-field label="技能7">
										<b-field>
											<b-autocomplete v-model="skill[6].name" :data="filteredSkillArray(6)" @select="option => skill[6].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[6].value"></b-input>
										</b-field>
									</b-field>
									<b-field label="技能8">
										<b-field>
											<b-autocomplete v-model="skill[7].name" :data="filteredSkillArray(7)" @select="option => skill[7].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[7].value"></b-input>
										</b-field>
									</b-field>
									<b-field label="技能9">
										<b-field>
											<b-autocomplete v-model="skill[8].name" :data="filteredSkillArray(8)" @select="option => skill[8].name = option"></b-autocomplete>
											<b-input type="number" v-model.number="skill[8].value"></b-input>
										</b-field>
									</b-field>
								</div>
							</div>
						</b-tab-item>
						
					</b-tabs>
				</section>

			</div>
    </div>
		<Footer />
  </div>
</template>

<script>
import firebase from 'firebase'
import {config} from '../firebaseconfig.js'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
import jobs from './assets/jobs.json'
import skills from './assets/skills.json'
firebase.initializeApp(config)
const db = firebase.firestore()

const svg2imageData = (svgElement, successCallback, errorCallback) => {
  const canvas = document.createElement('canvas')
  canvas.width = 640
  canvas.height = 480
  const ctx = canvas.getContext('2d')
  const image = new Image()
  image.onload = () => {
    ctx.drawImage(image, 0, 0, 640, 480)
    successCallback(canvas.toDataURL())
  }
  image.onerror = (e) => {
    errorCallback(e)
  }
  const svgData = new XMLSerializer().serializeToString(svgElement)
  image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(svgData)))
}

export default {
  name: 'svg',
  data () {
    return {
			isloading: false,
			charaname: '',
			plname: '',
			job: '学生',
			sex: '男性',
			age: '',
			message: '',
			str: 3,
			con: 3,
			siz: 8,
			dex: 3,
			app: 3,
			edu: 6,
			int: 8,
			pow: 3,
      uuid: '1', // 適当に採番する
			jobs: jobs,
			skills: skills,
			skill: [
				{"name":"","value":""},
				{"name":"","value":""},
				{"name":"","value":""},
				{"name":"","value":""},
				{"name":"","value":""},
				{"name":"","value":""},
				{"name":"","value":""},
				{"name":"","value":""},
				{"name":"","value":""},
				],
    }
	},
	computed : {
		filteredSkillArray() {
			return function(i) {
				return this.skills.filter((option) => {
					return option.toString().toLowerCase().indexOf(this.skill[i].name.toLowerCase()) >= 0
				})
			}
		},
		hp() {
			return Math.ceil((this.siz+this.con)/2)
		},
		mp() {
			return this.pow
		},
		san() {
			return this.pow*5
		},
		idea() {
			return this.int*5
		},
		luck() {
			return this.pow*5
		},
		knowledge() {
			return this.edu*5
		},
		db(){
			let power = this.str + this.siz;
			if(power>=73){
				return "+4D6"
			}else if(power>=57){
				return "+3D6"
			}else if(power>=41){
				return "+2D6"
			}else if(power>=33){
				return "+1D6"
			}else if(power>=25){
				return "+1D4"
			}else if(power>=17){
				return "0"
			}else if(power>=13){
				return "-1D4"
			}else{
				return "-1D6"
			}
		}
	},
  components : {
			Navbar,
			Hero,
			Footer,
  },
  methods : {
    async create() {
			this.isloading = true;
      svg2imageData(this.$refs.svgCard, async (data) => {
        const sRef = firebase.storage().ref()
        const fileRef = sRef.child(`${this.uuid}.png`)

        await fileRef.putString(data, 'data_url');
        const url = await fileRef.getDownloadURL()

        const card = db.collection('cards').doc(this.uuid)
        await card.set({
          url,
          message: this.message
				});
				this.isloading = false;
				this.share(this.message, this.uuid);
      })
		},
		share(text, id) {
			const tweetURL = "https://twitter.com/intent/tweet?text="+text+"%0D%0A&hashtags=CoCキャラ名刺&url="+location.href+"s/"+id;
			open(tweetURL, "SNS_window", "width=600, height=500,menubar=no, scrollbars=no")
		}
  }
}
</script>

<style>
	body {
			height: 100%;
	}
	#layout {
			height: 100%;
			min-height: 100%;
			background-color: #dfdfdf;
	}
	.box {
		margin-top: 1%;
		margin-bottom: 1%;
	}
	#svg {
		text-align: center;
	}
</style>