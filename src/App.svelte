<!-- App.svelte -->
<script>
       import { Router, Route } from "svelte-routing";
       import Index from "./pages/Index.svelte";
       import Home from "./pages/Home.svelte";
       import Chat from "./pages/Chat.svelte";
       import Repos from "./pages/Repos.svelte";

       localStorage.setItem("lastPage", "/");
</script>

<main class="">
       <Router>
              <Route path="/" component={Index} />
              <Route path="/home" component={Home} />
              <Route path="/chat" component={Chat} />
              <Route path="/repos" component={Repos} />
       </Router>
</main>
