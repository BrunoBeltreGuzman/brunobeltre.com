<script>
       export let repo = {};
       console.log(repo);

       import Language from "./Language.svelte";
</script>

<main>
       {#if repo}
              <div>
                     <div class="card repo">
                            <h6 class="title-repo">{repo.name}</h6>
                            <p class="text-repo">
                                   {repo.description ? repo.description : ""}
                            </p>

                            <div class="row row-cols-4">
                                   <Language language={repo.language} />
                                   <span class="col bar-repo">
                                          <i class="far fa-star" />
                                          {repo.stargazers_count}
                                   </span>
                                   <span class="col bar-repo">
                                          <i class="fas fa-code-branch" />
                                          {repo.default_branch}
                                   </span>
                                   <span class="col">
                                          <a
                                                 href={repo.html_url}
                                                 target="_blank"
                                                 class="a-link"
                                                 ><i class="fab fa-github" />
                                                 GitHub
                                                 <i
                                                        class="far fa-external-link-alt"
                                                 /></a
                                          >
                                   </span>
                            </div>
                     </div>
              </div>
              <br />
       {/if}
</main>
