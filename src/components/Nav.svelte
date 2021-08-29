<!-- App.svelte -->
<script>
       export let isNav;
       export let lastPage;
       export let isBack;
       export let isContat;

       import { Link } from "svelte-routing";
</script>

<main class="">
       <div class="container">
              <nav class="navbar navbar-dark bg-dark text-white fixed-top ">
                     <div class="container col-md-7 mx-auto">
                            <ul class="nav">
                                   {#if isBack == true}
                                          <li class="nav-item">
                                                 <Link
                                                        to={lastPage}
                                                        class="nav-link btn-secondary-3 item pl-4 pr-4 btn-sm"
                                                        ><i
                                                               class="fas fa-arrow-left"
                                                        /> Back</Link
                                                 >
                                          </li>
                                   {/if}
                            </ul>
                            <Link to="/home">
                                   <img
                                          src="img/pp.jpeg"
                                          alt="Avatar"
                                          class="avatar"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="bottom"
                                          title="Go to Home"
                                   /></Link
                            >
                     </div>
              </nav>
       </div>
</main>
