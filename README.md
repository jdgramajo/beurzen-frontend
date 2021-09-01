<h1>Beurzen Frontend</h1>
<p>
This is the Beurzen frontend project, dealing with all managed funds and diverse investing accounts.
</p>

<section id="normalUsersSection">
<h2>Basic Users</h2>

<div>
Will have access to:
<ul>
<li>Login form.</li>
<li><b>Their</b> account info only.</li>
</ul>
</div>
</section>

<section id="advancedUsersSection">
<h2>Advanced Users</h2>

<div>
In addition to the basic users' permissions, will have access to:
<ul>
<li>Fund size and participation pie chart.</li>
</ul>
</div>
</section>

<section id="advancedUsersSection">
<h2>Admin Users</h2>

<div>
In addition to the advanced users' permissions, will have access to:
<ul>
<li>TBD</li>
</ul>
</div>
</section>

<section id="architectureSection">
<h2>Architecture</h2>
<p>General guidelines are:</p>
<ul>
<li>Bundled with Webpack.</li>
<li>Deployable to Firebase and Heroku (a branch for each).</li>
<li>Will stick to JS as much as possible.</li>
<li>Enpoints have a controller, which takes care of interactions with <i>router(s)</i> and <i>service(s)</i>, and all responses to user actions and other events.</li>
<li>Templating via EJS, to define all DOM elements in a page (if applicable, some enpoints may only be "transition" requests). Templates are <i>loaded with the best (yet) Webpack loader</i> applicable.</li>
<li>Bootstrap 5.</li>
</ul>
</section>
