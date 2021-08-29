<script>
       export let language;
</script>

<main>
       {#if language == "JavaScript"}
              <span class="col lang-javascript">
                     <i class="fas fa-code" />
                     {language}
              </span>
       {/if}

       {#if language == "Go"}
              <span class="col lang-go">
                     <i class="fas fa-code" />
                     {language}
              </span>
       {/if}

       {#if language == "Java"}
              <span class="col lang-java">
                     <i class="fas fa-code" />
                     {language}
              </span>
       {/if}

       {#if language == "PHP"}
              <span class="col lang-php">
                     <i class="fas fa-code" />
                     {language}
              </span>
       {/if}

       {#if language == "TypeScript"}
              <span class="col lang-typescript">
                     <i class="fas fa-code" />
                     {language}
              </span>
       {/if}

       {#if language == "HTML"}
              <span class="col lang-html">
                     <i class="fas fa-code" />
                     {language}
              </span>
       {/if}

       {#if language == null}
              <span class="col lang-lite">
                     <i class="fas fa-code" />
              </span>
       {/if}
</main>
