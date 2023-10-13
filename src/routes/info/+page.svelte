<div>
	<h1>Project Quarm Client</h1>
	<h2>UI/Resolution</h2>
	<p>
		eqclient.ini is in the root directory. If you want to use the new UI ensure
		the following
	</p>
	<pre>NewUI=TRUE
OldUI=FALSE</pre>
	<p>
		To edit the UI, change the following parts of eqclient.ini BEFORE going to
		the character select screen
	</p>
	<pre>[VideoMode]
BitsPerPixel=32
Width=2560
Height=1362
RefreshRate=60</pre>
	<h2>Other Client Things to Edit</h2>
	<pre>[Options]
MaxFPS=60
MaxBGFPS=45
MaxMouseLookFPS=60
WindowedMode=TRUE
MouseRightHanded=1</pre>
	<h1>Game Mechanics</h1>
	<h2>Project Quarm is not Project 1999</h2>
	<p>So stop acting like P99's way was the only way.</p>
	<img src="/project1999.jpg" alt="shut up about project 1999" />
	<h2>Pet's Impact to Experience - Solo</h2>
	<a
		href="https://github.com/SecretsOTheP/EQMacEmu/blob/0ede14c26b62a4dfb235679b8cd96bcef9f9521d/zone/exp.cpp#L216"
		>Link to Code</a>
	<p>If a pet does > 50% of damage to an NPC - the pet takes half the exp.</p>
	<h2>Pet's Impact to Experience - Group</h2>
	<a
		href="https://github.com/SecretsOTheP/EQMacEmu/blob/0ede14c26b62a4dfb235679b8cd96bcef9f9521d/zone/exp.cpp#L963"
		>Link to Code</a>
	<p>
		If a pet does > 50% of damage to an NPC - the pet is treated as a group
		member for experience split
	</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	pre {
		border: 3px solid var(--surface-2);
		padding: 1rem;
	}
</style>
