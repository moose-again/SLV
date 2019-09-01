    function sbTemplate() {
    
    
    return `
    <div class="sidenav px-2 sidebar">
      <input type="text" id="filterBar disabledInput" class="form-control" onkeyup="myFunction()" placeholder="Search is inactive.. Try Ctrl+F" disabled>
      <div class="mt-3">
        <a href="#" class="active notice" data-toggle="popover" data-title="Dude!" data-placement="left" data-content="Why are clicking me? You are already on my page 🤕. Thank you."><i class="fas fa-bezier-curve"></i> All Logos</a>
        <a class="nav-link disabled" href="#"><i class="fas fa-baseball-ball"></i> Baseball <span class="badge badge-warning">Inactive</span></a>
        <a class="nav-link disabled" href="#"><i class="fas fa-football-ball"></i> Football <span class="badge badge-warning">Inactive</span></a>
        <a class="nav-link disabled" href="#"><i class="fas fa-basketball-ball"></i> Basketball <span class="badge badge-warning">Inactive</span></a>
        <a class="nav-link disabled" href="#"><i class="fas fa-hockey-puck"></i> Hockey <span class="badge badge-warning">Inactive</span></a>
        <a class="nav-link disabled" href="#"><s><i class="far fa-futbol"></i> Soccer</s> <span class="badge badge-danger">Coming Soon</span></a>
        <a class="nav-link disabled" href="categories"><i class="fas fa-th"></i> Categories <span class="badge badge-warning">Inactive</span></a>

      </div>

    </div>
    `
  }

document.getElementById("sidebar").innerHTML = sbTemplate()