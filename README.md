# node-to-jquery-haml

This simple JavaScript utility function serializes a DOM element as [jquery-haml](https://github.com/creationix/jquery-haml) (an awesome, JSON-compatible alternative to HTML for templating). For instance:

    <div id="loginBox">
    	<h1>Log In</h1>
    	<form>
    		<input type="text" name="email" placeholder="Email Address">
    		<input type="password" name="password" placeholder="Password">
    		<p>
    			<button>Log In</button>
    			<input type="checkbox" name="remember_me" id="login_remember_me"> <label for="login_remember_me">Remember me</label>
    		</p>
    	</form>
    </div>

Run that through our little utility…

    toHAML(document.getElementById('loginBox'));

…and look what comes out!

    [ "#loginBox",
    	[ "%h1", "Log In" ],
    	[ "%form",
    		[ "%input", { "type": "text", "name": "email", "placeholder": "Email Address" } ],
    		[ "%input", { "type": "password", "name": "password", "placeholder": "Password" } ],
    		[ "%p",
    			[ "%button", "Log In" ],
    			[ "%input#login_remember_me", { "type": "checkbox", "name": "remember_me" } ],
    			[ "%label", { "for": "login_remember_me" }, "Remember me" ]
    		]
    	]
    ]