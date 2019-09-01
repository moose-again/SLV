function navTemplate() {
    
    
    return `
<nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <a class="navbar-brand" href="#"><img src="static/img/slv-logo.svg" style="width: 30px;"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/about" data-page="home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/library" data-page="library">Library</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/moose1645/SLV/issues/new/choose">Report a bug</a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <a class="nav-link social-btn" href="https://github.com/moose1645/SLV/"><i class="fab fa-github-alt fa-lg"></i>
        </a>
    </ul>
  </div>
  </div>
</nav>

    `
  }


document.getElementById("nav").innerHTML = navTemplate()
