<div class="navWrap">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/store/"><img src="/store/img/sqfull.png" class="logoPic"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/store/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/store/shop/">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/store/about/">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/store/contact/">Contact</a>
            </li>
          </ul>
        </div>
        <div class="myAccount">
          <button data-toggle="modal" data-target="#accountModal"><i class="fas fa-user"></i>My Account</button><button data-toggle="modal" data-target="#myModal2"><i class="fas fa-shopping-cart" aria-hidden="true"></i>My Cart</button>
        </div>
      </nav>
    
    <div class="lowerNav">
      <div class="categories">
        <button class="shopCat" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-bars"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <a class="dropdown-item" href="/store/shop/shoes">Shoes</a>
          <a class="dropdown-item" href="/store/shop/hats">Hats</a>
          <a class="dropdown-item" href="/store/shop/comingSoon">Watches</a>
          <a class="dropdown-item" href="/store/shop/comingSoon">Accessories</a>
        </div>
          <div class="catWrap">
            <div class="topCat">
              <h5>Shop By</h5>
            </div>
            <div class="botCat">
              <h5>Category</h5>
            </div>
          </div>
      </div>
        
      <div class="searchContain">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0 btnSearch">Search</button>
        </form>
      </div>
    </div>
    </div>


    <!-- Account Login Modal -->
    <div class="modal" id="accountModal" tabindex="-1" role="dialog" aria-labelledby="accountModalLabel" aria-hidden="true">
      <div class="container mt-5">
        <div class="d-flex justify-content-center h-100">
          <div id="formContent">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <div class="first">
              <h1 class="my-5">Account Login</h1>
            </div>
            <!-- Login Form -->
            <form>
              <input type="email" id="email" class="second zero-raduis" name="email" placeholder="email">
              <input type="text" id="password" class="third zero-raduis" name="login" placeholder="password">
              <div id="formFooter">
                <a class="pwReset">Forgot Password?</a>
              </div>
              <input id="login" type="submit" class="fourth zero-raduis" value="login">
              <h2>Don't have a account?</h2>
              <input id="login2" type="button" class="fourth zero-raduis pc" value="register">
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- End Account Login Modal -->