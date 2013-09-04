// Generated by CoffeeScript 1.6.3
(function() {
  c('gemfile', function() {
    this.title("Welcome to Batman!");
    this.say("Let's say you have a Rails app that talks to Rdio that you want to batman-ize.");
    this.say("First, add `gem 'batman-rails'` to your Gemfile and press Cmd/Ctrl+S to save.");
    this.say("Note: this tutorial uses some features specific to batman-rails, but you can use batman.js with any backend.");
    this.focus('/Gemfile');
    return this.after("Great! Now we can use the batman.js generators.");
  });

  $('appgen', ['/app/controllers/batman_controller.rb', '/app/views/layouts/batman.html.erb', '/app/assets/batman'], function() {
    this.title("App Generator");
    this.say("batman-rails includes a number of Rails generators to make batman.js development easy.");
    this.say("Run `rails generate batman:app` to generate an empty batman.js app.");
    this.expect(/rails\s+(g|generate)\s+batman:app/, " create  app/controllers/batman_controller.rb\n create  app/views/layouts/batman.html.erb\n insert  config/routes.rb\n create  app/assets/batman/rdio.js.coffee\n create  app/assets/batman/models\n create  app/assets/batman/models/.gitkeep\n create  app/assets/batman/views\n create  app/assets/batman/views/.gitkeep\n create  app/assets/batman/controllers\n create  app/assets/batman/controllers/.gitkeep\n create  app/assets/batman/html\n create  app/assets/batman/html/.gitkeep\n create  app/assets/batman/lib\n create  app/assets/batman/lib/.gitkeep\n create  app/assets/batman/html/main\n create  app/assets/batman/controllers/application_controller.js.coffee\n create  app/assets/batman/controllers/main_controller.js.coffee\n create  app/assets/batman/html/main/index.html\nprepend  app/assets/batman/rdio.js.coffee\nprepend  app/assets/batman/rdio.js.coffee\nprepend  app/assets/batman/rdio.js.coffee\nprepend  app/assets/batman/rdio.js.coffee");
    return this.after("There's our app! The generator puts all of our app files in `app/assets/batman`.");
  });

  c('look_around_app', function() {
    this.title("App Generator");
    this.enableLaunchAppButton();
    this.say("Take a look around the generated app in `app/assets/batman`.");
    this.say("Press the Launch App button to preview your app as you write code.");
    this.say("It's pretty empty now, just some text fields that automatically update");
    this.say("data and other UI within the app. The preview will automatically reload");
    this.say("whenever you save changes to a file with Ctrl/Cmd+S.");
    this.focus('/app/assets/batman/html/main/index.html');
    return this.complete();
  });

  $('playlist', ['/app/assets/batman/controllers/playlists_controller.js.coffee', '/app/assets/batman/models/playlist.js.coffee', '/app/assets/batman/views/playlists', '/app/assets/batman/html/playlists'], function() {
    this.title("Scaffold Generator");
    this.say("Our Rails app already has a JSON API for managing a Playlist resource.");
    this.say("Let's generate a corresponding resource for the batman.js side.");
    this.say("Run `rails generate batman:scaffold Playlist` to make a new scaffold.");
    this.expect(/rails\s+(g|generate)\s+batman:scaffold\s+[Pp]laylist/, "generate  batman:model Playlist\n  create  app/assets/batman/models/playlist.js.coffee\ngenerate  batman:controller playlists index show edit new create update destroy\n  create  app/assets/batman/controllers/playlists_controller.js.coffee\ngenerate  batman:html playlists index show edit new\n  create  app/assets/batman/html/playlists\n  create  app/assets/batman/html/playlists/index.html\n  create  app/assets/batman/html/playlists/show.html\n  create  app/assets/batman/html/playlists/edit.html\n  create  app/assets/batman/html/playlists/new.html\ngenerate  batman:view  playlists index show edit new\n  create  app/assets/batman/views/playlists\n  create  app/assets/batman/views/playlists/playlists_index_view.js.coffee\n  create  app/assets/batman/views/playlists/playlists_show_view.js.coffee\n  create  app/assets/batman/views/playlists/playlists_edit_view.js.coffee\n  create  app/assets/batman/views/playlists/playlists_new_view.js.coffee\n  insert  app/assets/batman/rdio.js.coffee");
    return this.after("The scaffold generator sets up a controller, model, and empty views for a playlist resource.");
  });

  c('look_around_playlist', function() {
    this.title("Scaffold Generator");
    this.say("Look around the generated Playlist scaffold. You'll find files in");
    this.say("`controllers`, `models`, and `html`. It won't do much yet, but we've added");
    this.say("some basic HTML. Try clicking the `Playlists` link in the preview window.");
    this.focus('/app/assets/batman/html/playlists/index.html');
    return this.complete();
  });

  c('routing', function() {
    this.title("Routing");
    this.say("Notice that clicking on that link took you to a new URL and a new controller within your app.");
    this.say("Every action in your controller needs to be mapped to by at least one URL, called a route.");
    this.say("batman.js uses a very similar routing syntax to Rails. Declare your routes in `rdio.js.coffee`.");
    this.say("For a simple first task, try changing the `root` route (what will be matched by `/`) to point to");
    this.say("`playlists#index` instead of `main#index`. This represents the index action of playlists controller.");
    this.focus('/app/assets/batman/rdio.js.coffee');
    this.after("Note that the scaffold generator automatically adds an `@resource` route, which is a");
    this.after("macro that automatically adds four routes for all of the default CRUD actions (index,");
    return this.after("show, edit, new) and maps them to a corresponding action in your `PlaylistsController`.");
  });

  c('playlist_index', function() {
    this.title("List All Playlists");
    this.say("First, let's grab all the playlists resources from the API and store them in");
    this.say("an instance variable on our controller that we can access from the view.");
    this.say("Add `@set('playlists', Rdio.Playlist.get('all'))` to the `index` action.");
    this.focus('/app/assets/batman/controllers/playlists_controller.js.coffee');
    this.after("All properties in batman.js are accessed with `get` and `set`. It's magic.");
    this.after("`Playlist.get('all')` will automatically send a GET request to /playlists.json.");
    return this.after("Now let's show the user how many playlists are stored on the server.");
  });

  c('first_binding', function() {
    this.title("Baby's First Binding");
    this.say("A big chunk of the power of batman.js lies in its data bindings. You can use them");
    this.say("to hook up your HTML to your model and app data, without writing glue code.");
    this.say("Add `data-bind=\"playlists.length\"` to the `span` insude the `h1` element.");
    this.focus('/app/assets/batman/html/playlists/index.html');
    this.after("The span will automatically observe the length of the playlist array and update when it changes.");
    this.after("All data bindings start with `data-*` and reference model or app data directly.");
    return this.after("The most basic `data-bind` always updates the value or innerHTML of a node.");
  });

  c('showif_binding', function() {
    this.title("Show/Hide Bindings");
    this.say("Oftentimes, you'll want to show or hide part of your page when data chances.");
    this.say("Let's add a blank slate for when there are 0 playlists.");
    this.say("Add `data-showif=\"playlists.isEmpty\"` to the `h3` element.");
    this.focus('/app/assets/batman/html/playlists/index.html');
    this.after("The `h3` will automatically observe the length of the playlist array and hide if");
    this.after("there are more than 0 items. `data-hideif` works exactly the same way, but hides");
    return this.after("the node instead of shows it. Ok, now let's actually show all the playlists.");
  });

  c('foreach_binding', function() {
    this.title("For Each Bindings");
    this.say("Another common task is iterating over a set of data that may change. Try adding");
    this.say("`data-foreach-list=\"playlists\"` to the `li` node and `data-bind=\"list.name\"` to its");
    this.say("inner `span`. This says for each `list` in `playlists`, copy this `li` and assign `list` to it.");
    this.focus('/app/assets/batman/html/playlists/index.html');
    this.after("This node will be cloned for every iteration of the set of playlists.");
    this.after("Every cloned node has access to the iteration property, which in this");
    return this.after("case, is what we called `list`. But hmm, still nothing shows up...");
  });

  c('encoders', function() {
    this.title("Model Encoders");
    this.say("We need to tell the batman.js model which properties to grab from the server.");
    this.say("Take a look in `db/schema.rb` to see which database columns a Playlist has.");
    this.say("Now add a corresponding `@encode` for each column to our playlist model.");
    this.say("Hint: You can use a single `@encode` for multiple properties on the same line.");
    this.focus('/app/assets/batman/models/playlist.js.coffee');
    return this.after("Awesome, the list works! Now, let's show the icon for the playlist.");
  });

  c('attribute_binding', function() {
    this.title("Attribute Bindings");
    this.say("Another type of binding, similar to the original `data-bind` content binding is");
    this.say("the attribute binding. Instead of just the node's content, you can bind any of");
    this.say("the node's attributes. Add `data-bind-src=\"list.icon\"` to the `img` tag.");
    this.focus('/app/assets/batman/html/playlists/index.html');
    this.after("Any valid HTML attribute can be bound and autoupdated simply by doing");
    this.after("`data-bind-[attribute]`. Set `id`s, `class` names, `src`s, `disabled`s, etc.");
    return this.after("Finally, let's set up some links to other routes in our app.");
  });

  c('route_bindings', function() {
    this.title("Route Bindings");
    this.say("Let's look at one more type of binding to navigate around our app. `data-route`");
    this.say("takes three types of arguments. A manual URL as a string, a named route, or a resource.");
    this.say("Add `data-route=\"routes.playlists.new\"` (named route) to the `a` tag for New Playlist.");
    this.say("Add `data-route=\"playlist\"` (resource route) to the `a` tag in the playlist `li`.");
    this.focus('/app/assets/batman/html/playlists/index.html');
    this.after("`data-route` automatically handles all the interaction for links and buttons.");
    this.after("It will handle pushState if the user's browser supports it and manages URL's in");
    this.after("exactly the way you'd expect. That means we don't break back or forward buttons,");
    return this.after("bookmarkable URL's, or anything else people like to complain about.");
  });

  c('fast_forward', ['/app/assets/batman/models/track.js.coffee', '/app/assets/batman/models/album.js.coffee'], function() {
    this.title("Intermission");
    this.say("We've filled in some more of the app for you so we can look at more");
    this.say("interesting things. Feel free to take a minute to click through the code.");
    this.focus('/app/assets/batman/controllers/playlists_controller.js.coffee');
    return this.complete();
  });

  $('generate_player_view', ['/app/assets/batman/html/player', '/app/assets/batman/views/player_view.js.coffee'], function() {
    this.title("Custom Views");
    this.say("Let's generate a custom view for the Rdio player.");
    this.say("Run `rails generate batman:view player`.");
    this.expect(/rails\s+(g|generate)\s+batman:view\s+player/, "create  app/assets/batman/views/player_view.js.coffee");
    return this.after("Great, we have a simple view file.");
  });

  c('view_source', function() {
    this.title("Custom View Sources");
    this.say("First we have to tell our custom view where to find its HTML.");
    this.say("Specify the view's `source` property as `player/main`.");
    this.focus('/app/assets/batman/views/player_view.js.coffee');
    return this.after("Check it out, that's a nice looking player!");
  });

  c('viewDidAppear', function() {
    this.title("Custom View Events");
    this.say("You can define special events on a view class that will be called");
    this.say("at various points in the view's lifecycle. Here, `viewDidAppear`");
    this.say("will be called whenever the view appears in the DOM for the first time.");
    this.say("We use it to implement custom logic, jQuery, and event handlers.");
    return this.complete();
  });

  c('fin', function() {
    this.title("Looking Back");
    this.say("Well shit amigo, that's a pretty slick looking Rdio playlist manager.");
    this.say("You should have a bit of a better idea of what it's like to develop with");
    return this.say("batman.js now, but feel free to poke around the <a href=\"http://github.com/batmanjs/rdio\">Rdio app</a> on GitHub a bit more.");
  });

}).call(this);
