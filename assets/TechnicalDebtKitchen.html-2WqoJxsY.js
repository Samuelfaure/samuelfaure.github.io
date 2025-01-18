import{_ as n,r as i,c as r,a as l,b as a,d as t,e as s,w as h,o as c}from"./app-DXDllTzl.js";const d="/images/kitchen_dirty.webp",u="/images/kitchen_clean.webp",p={};function y(m,e){const o=i("RouteLink");return c(),r("div",null,[e[3]||(e[3]=l('<h1 id="🔪-the-technical-debt-explained-with-a-kitchen-analogy" tabindex="-1"><a class="header-anchor" href="#🔪-the-technical-debt-explained-with-a-kitchen-analogy"><span>🔪 The Technical Debt explained with a kitchen analogy.</span></a></h1><p>I&#39;m often confronted to the challenge of explaining to a non-tech person what the &quot;Technical Debt&quot; is. Or maybe I have to explain the difference between Good code VS Bad code, or between a good codebase VS a bad codebase.</p><p>More importantly, I often need people to <em>feel</em> what it&#39;s like to work with or without Technical Debt. How can a tech person convey the <em>feelings</em> of a work environment full of Technical Debt to someone who never coded in their life?</p><p>The best metaphor I could find is the kitchen.</p><h2 id="the-technical-debt-explained-for-tech-people" tabindex="-1"><a class="header-anchor" href="#the-technical-debt-explained-for-tech-people"><span>The Technical Debt explained for tech people:</span></a></h2><p>The Technical Debt is what happens when you try to take shortcuts in the development or maintenance of your application :</p><ul><li>You developed a new feature but the code is hacky, slightly disgusting, and you won&#39;t factorize it and polish it? That&#39;s technical debt.</li><li>You&#39;re not taking the time to test your application? This adds to your technical debt.</li><li>No time to update to the last version of your framework? More technical debt.</li></ul><p>TD can come from pure laziness, or from a lack of technical skill, but that&#39;s extremely rare. The overwhelming majority of cases is a lack of time.</p><h2 id="the-technical-debt-is-very-bad©" tabindex="-1"><a class="header-anchor" href="#the-technical-debt-is-very-bad©"><span>The Technical Debt is Very Bad©</span></a></h2><p>Every developer worth their salt knows it: while small amounts of TD are not a big issue, and can even be desirable in some cases (i.e. you have a deadline you can&#39;t miss) in the long run an out-of-control Technical Debt will be a terrible burden for your whole company:</p><ul><li>It drastically slows your development speed in the middle / long term.</li><li>It works as a feedback loop: the more TD you currently have, the more you will generate.</li><li>It will make your engineers hate the work. More on that later.</li><li>It can, in the end, literally destroy your company.</li></ul><h2 id="what-it-s-like-to-work-with-technical-debt-the-kitchen-analogy" tabindex="-1"><a class="header-anchor" href="#what-it-s-like-to-work-with-technical-debt-the-kitchen-analogy"><span>What it&#39;s like to work with Technical Debt: the Kitchen Analogy.</span></a></h2><p>Imagine that you&#39;re a professional cook. A very good one, actually: after years and years of hard studies, you developed skills that are sought-after in the best 3-stars restaurants.</p><p>You just got hired in a new, promising restaurant: &quot;The Unicorn&quot;. The pay is good. The team is great. You&#39;re psyched up for your first day.</p><p>Then on your first morning, you enter the kitchen and this is what you see:</p><p><img src="'+d+'" alt="Very dirty kitchen"></p><p>Your first thought, obviously, is &quot;What a f**** mess. This needs to be cleaned immediately and urgently&quot;. But the manager tells you there is no time, customers are arriving right now, so you&#39;d better start cooking this instant.</p><p><strong>Do you think you&#39;ll have a good, enjoyable first day of work?</strong></p><p>Now realize this is what you&#39;ll be dealing with, 5 days a week, 4 weeks a month, for many years of your precious life.</p><p>Working in a dirty kitchen is extremely depressing. It will make everything you do a terrible chore. Even the simplest plate will be hard to prepare. You&#39;re going to serve shit, sometimes literal shit, to your customers. There will be bugs crawling everywhere, and every time you squash one, two more will appear. You will lose more time removing squashed bug parts from the customer&#39;s plates than you would spend cleaning or, you know, actually cooking good food.</p><p>Now imagine instead that this is what you saw when you arrived:</p><p><img src="'+u+'" alt="Very clean kitchen"></p><p>Clean. Polished. Everything well organized, easy to access. Just beautiful.</p><p>Will it be the same work experience?</p><p>There&#39;s a reason for the popular saying: <em>&quot;Technical Debt is debt you repay with your soul&quot;</em>.</p><h2 id="why-do-we-allow-technical-debt-to-exist" tabindex="-1"><a class="header-anchor" href="#why-do-we-allow-technical-debt-to-exist"><span>Why do we allow Technical Debt to exist?</span></a></h2><p>There&#39;s a lot of reasons for a TD to grow out of control. None of them are good.</p><h3 id="young-start-up-on-takeoff" tabindex="-1"><a class="header-anchor" href="#young-start-up-on-takeoff"><span>Young start-up on takeoff</span></a></h3><p>The only maybe-somehow-acceptable situation where a TD can grow significantly would be at the very early stages in a start-up creation. You need to conquer market shares fast, so you need to develop fast.</p><p>Here&#39;s where the issues starts to appear, though. Because TD generates more TD, the start-up which doesn&#39;t take care of its TD early will then carry it for years and years, until it turns into a black hole destroying your company efficiency and slurping your developers wellbeing.</p><h3 id="bad-management" tabindex="-1"><a class="header-anchor" href="#bad-management"><span>Bad management</span></a></h3><p>Non-tech managers, sadly, do not understand what the TD is, and as I mentioned earlier, it is extremely difficult to explain to them the extent of the issue.</p><p>They will only see what is actually produced by the dev team, i.e. which features are getting out. They don&#39;t realize most of the work that happens under the hood.</p><p>If they end up measuring your productivity in features (or worse, in amount of code produced) without any regard for the Technical Debt, then <strong>programmers are actually incentivized to sabotage the codebase.</strong></p><p>Bill gates said &quot;Measuring programming progress by lines of code is like measuring aircraft building progress by weight.&quot;. A great analogy, since heavy aircrafts are harder to fly &amp; more fuel-consuming.</p><h3 id="never-worked-in-the-clean" tabindex="-1"><a class="header-anchor" href="#never-worked-in-the-clean"><span>Never worked in the clean</span></a></h3><p>Programming schools often don&#39;t spend enough time on the necessity of a clean codebase. They usually just ask you to code small or medium-sized projects with a given list of features.</p><p>Therefore, a junior developer just out of school won&#39;t realize the importance of a clean work environment.</p><p>Now, if the junior joins a team of professionals who uphold themselves to high standards, he will realize <em>how much better</em> cooking in a clean kitchen is.</p><p>But usually, they will join a company with subpar coding practices. This will reinforce in them the idea that this is what coding is. Coding is hard, and annoying, and there&#39;s shit everywhere, that&#39;s just how the work is, and nothing can be done about it.</p><p>It is normal for a kitchen to look disgusting. That&#39;s how kitchens are.</p><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2><p>I often hear stories of junior developers, &quot;realizing the work is not for them&quot; and wanting to quit the industry.</p><p>They feel stressed, burned-out, everything seems just so damn complex all the damn time. They&#39;re exhausted. They don&#39;t think they can keep doing the same work for 40 more years.</p><p>Every time I ask them about their work conditions, it becomes clear they&#39;ve been working in the dirtiest kitchen.</p><p>We are literally losing developers under the dirty dishes.</p>',46)),a("p",null,[e[1]||(e[1]=t("It needs to stop. The Technical Debt culture is ")),s(o,{to:"/opinions/WhyOurWorkCultureSucks.html"},{default:h(()=>e[0]||(e[0]=[t("one of the major reasons why our work culture suck")])),_:1}),e[2]||(e[2]=t("."))]),e[4]||(e[4]=a("p",null,"And it really doesn't have to. Just clean your damn kitchen.",-1))])}const g=n(p,[["render",y],["__file","TechnicalDebtKitchen.html.vue"]]),f=JSON.parse(`{"path":"/opinions/TechnicalDebtKitchen.html","title":"🔪 The Technical Debt explained with a kitchen analogy","lang":"en-US","frontmatter":{"title":"🔪 The Technical Debt explained with a kitchen analogy","description":"Wow, so effiency, very good practices","footer":"CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3"},"headers":[{"level":2,"title":"The Technical Debt explained for tech people:","slug":"the-technical-debt-explained-for-tech-people","link":"#the-technical-debt-explained-for-tech-people","children":[]},{"level":2,"title":"The Technical Debt is Very Bad©","slug":"the-technical-debt-is-very-bad©","link":"#the-technical-debt-is-very-bad©","children":[]},{"level":2,"title":"What it's like to work with Technical Debt: the Kitchen Analogy.","slug":"what-it-s-like-to-work-with-technical-debt-the-kitchen-analogy","link":"#what-it-s-like-to-work-with-technical-debt-the-kitchen-analogy","children":[]},{"level":2,"title":"Why do we allow Technical Debt to exist?","slug":"why-do-we-allow-technical-debt-to-exist","link":"#why-do-we-allow-technical-debt-to-exist","children":[{"level":3,"title":"Young start-up on takeoff","slug":"young-start-up-on-takeoff","link":"#young-start-up-on-takeoff","children":[]},{"level":3,"title":"Bad management","slug":"bad-management","link":"#bad-management","children":[]},{"level":3,"title":"Never worked in the clean","slug":"never-worked-in-the-clean","link":"#never-worked-in-the-clean","children":[]}]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}],"git":{"updatedTime":1716438042000,"contributors":[{"name":"Samuelfaure","email":"samuel.faure.dev@gmail.com","commits":4}]},"filePathRelative":"opinions/TechnicalDebtKitchen.md"}`);export{g as comp,f as data};
