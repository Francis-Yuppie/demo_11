const cartLayout = () => {
	return (
		 <header class="shadow-sm">
        <div class="topbar topbar-dark bg-dark">
          <div class="container">
            <div class="topbar-text dropdown d-md-none"><a class="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Useful links</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="tel:00331697720"><i class="ci-support text-muted me-2"></i>(00) 33 169 7720</a></li>
                <li><a class="dropdown-item" href="order-tracking.html"><i class="ci-location text-muted me-2"></i>Order tracking</a></li>
              </ul>
            </div>
            <div class="topbar-text text-nowrap d-none d-md-inline-block"><i class="ci-support"></i><span class="text-muted me-1">Support</span><a class="topbar-link" href="tel:00331697720">(00) 33 169 7720</a></div>
            <div class="tns-carousel tns-controls-static d-none d-md-block">
              <div class="tns-carousel-inner" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}">
                <div class="topbar-text">Free shipping for order over $200</div>
                <div class="topbar-text">We return money within 30 days</div>
                <div class="topbar-text"> Friendly 24/7 customer support</div>
              </div>
            </div>
            <div class="ms-3 text-nowrap"><a class="topbar-link me-4 d-none d-md-inline-block" href="order-tracking.html"><i class="ci-location"></i>Order tracking</a>
              <div class="topbar-text dropdown disable-autohide"><a class="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><img class="me-2" src="img/flags/en.png" width="20" alt="English"/>Eng / $</a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li class="dropdown-item">
                    <select class="form-select form-select-sm">
                      <option value="usd">$ USD</option>
                      <option value="eur">€ EUR</option>
                      <option value="ukp">£ UKP</option>
                      <option value="jpy">¥ JPY</option>
                    </select>
                  </li>
                  <li><a class="dropdown-item pb-1" href="#"><img class="me-2" src="img/flags/fr.png" width="20" alt="Français"/>Français</a></li>
                  <li><a class="dropdown-item pb-1" href="#"><img class="me-2" src="img/flags/de.png" width="20" alt="Deutsch"/>Deutsch</a></li>
                  <li><a class="dropdown-item" href="#"><img class="me-2" src="img/flags/it.png" width="20" alt="Italiano"/>Italiano</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-sticky bg-light">
          <div class="navbar navbar-expand-lg navbar-light">
            <div class="container"><a class="navbar-brand d-none d-sm-block flex-shrink-0" href="index.html"><img src="img/logo-dark.png" width="142" alt="Cartzilla"/></a><a class="navbar-brand d-sm-none flex-shrink-0 me-2" href="index.html"><img src="img/logo-icon.png" width="74" alt="Cartzilla"></a>
              <div class="input-group d-none d-lg-flex mx-4">
                <input class="form-control rounded-end pe-5" type="text" placeholder="Search for products"><i class="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
              </div>
              <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button><a class="navbar-tool navbar-stuck-toggler" href="#"><span class="navbar-tool-tooltip">Expand menu</span>
                  <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-menu"></i></div></a><a class="navbar-tool d-none d-lg-flex" href="account-wishlist.html"><span class="navbar-tool-tooltip">Wishlist</span>
                  <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-heart"></i></div></a><a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                  <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-user"></i></div>
                  <div class="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
                <div class="navbar-tool dropdown ms-3"><a class="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html"><span class="navbar-tool-label">4</span><i class="navbar-tool-icon ci-cart"></i></a><a class="navbar-tool-text" href="shop-cart.html"><small>My Cart</small>$265.00</a>
                  <!-- Cart dropdown-->
                  <div class="dropdown-menu dropdown-menu-end">
                    <div class="widget widget-cart px-3 pt-2 pb-3" style="width: 20rem;">
                      <div style="height: 15rem;" data-simplebar data-simplebar-auto-hide="false">
                        <div class="widget-cart-item pb-2 border-bottom">
                          <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div class="d-flex align-items-center"><a class="flex-shrink-0" href="shop-single-v1.html"><img src="img/shop/cart/widget/01.jpg" width="64" alt="Product"></a>
                            <div class="ps-2">
                              <h6 class="widget-product-title"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h6>
                              <div class="widget-product-meta"><span class="text-accent me-2">$150.<small>00</small></span><span class="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div class="widget-cart-item py-2 border-bottom">
                          <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div class="d-flex align-items-center"><a class="flex-shrink-0" href="shop-single-v1.html"><img src="img/shop/cart/widget/02.jpg" width="64" alt="Product"></a>
                            <div class="ps-2">
                              <h6 class="widget-product-title"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h6>
                              <div class="widget-product-meta"><span class="text-accent me-2">$79.<small>50</small></span><span class="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div class="widget-cart-item py-2 border-bottom">
                          <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div class="d-flex align-items-center"><a class="flex-shrink-0" href="shop-single-v1.html"><img src="img/shop/cart/widget/03.jpg" width="64" alt="Product"></a>
                            <div class="ps-2">
                              <h6 class="widget-product-title"><a href="shop-single-v1.html">3-Color Sun Stash Hat</a></h6>
                              <div class="widget-product-meta"><span class="text-accent me-2">$22.<small>50</small></span><span class="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div class="widget-cart-item py-2 border-bottom">
                          <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div class="d-flex align-items-center"><a class="flex-shrink-0" href="shop-single-v1.html"><img src="img/shop/cart/widget/04.jpg" width="64" alt="Product"></a>
                            <div class="ps-2">
                              <h6 class="widget-product-title"><a href="shop-single-v1.html">Cotton Polo Regular Fit</a></h6>
                              <div class="widget-product-meta"><span class="text-accent me-2">$9.<small>00</small></span><span class="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div class="fs-sm me-2 py-2"><span class="text-muted">Subtotal:</span><span class="text-accent fs-base ms-1">$265.<small>00</small></span></div><a class="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i class="ci-arrow-right ms-1 me-n1"></i></a>
                      </div><a class="btn btn-primary btn-sm d-block w-100" href="checkout-details.html"><i class="ci-card me-2 fs-base align-middle"></i>Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
            <div class="container">
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <!-- Search-->
                <div class="input-group d-lg-none my-3"><i class="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                  <input class="form-control rounded-start" type="text" placeholder="Search for products">
                </div>
                <!-- Departments menu-->
                <ul class="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i class="ci-view-grid me-2"></i>Departments</a>
                    <div class="dropdown-menu px-2 pb-4">
                      <div class="d-flex flex-wrap flex-sm-nowrap">
                        <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                          <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/01.jpg" alt="Clothing"></a>
                            <h6 class="fs-base mb-2">Clothing</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Women's clothing</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Men's clothing</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Kid's clothing</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/02.jpg" alt="Shoes"></a>
                            <h6 class="fs-base mb-2">Shoes</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Women's shoes</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Men's shoes</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Kid's shoes</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/03.jpg" alt="Gadgets"></a>
                            <h6 class="fs-base mb-2">Gadgets</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Smartphones &amp; Tablets</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Wearable gadgets</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">E-book readers</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-wrap flex-sm-nowrap">
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/04.jpg" alt="Furniture"></a>
                            <h6 class="fs-base mb-2">Furniture &amp; Decor</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Home furniture</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Office furniture</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Lighting and decoration</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/05.jpg" alt="Accessories"></a>
                            <h6 class="fs-base mb-2">Accessories</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Hats</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Sunglasses</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Bags</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/06.jpg" alt="Entertainment"></a>
                            <h6 class="fs-base mb-2">Entertainment</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Kid's toys</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Video games</a></li>
                              <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Outdoor / Camping</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- Primary menu-->
                <ul class="navbar-nav">
                  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown position-static mb-0"><a class="dropdown-item border-bottom py-2" href="home-nft.html"><span class="d-block text-heading">NFT Marketplace<span class="badge bg-danger ms-1">NEW</span></span><small class="d-block text-muted">NFTs, Multi-vendor, Auctions</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-nft.html" style="width: 250px;"><img src="img/home/preview/th08.jpg" alt="NFT Marketplace"></a></div>
                      </li>
                      <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-fashion-store-v1.html"><span class="d-block text-heading">Fashion Store v.1</span><small class="d-block text-muted">Classic shop layout</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-fashion-store-v1.html" style="width: 250px;"><img src="img/home/preview/th01.jpg" alt="Fashion Store v.1"></a></div>
                      </li>
                      <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-electronics-store.html"><span class="d-block text-heading">Electronics Store</span><small class="d-block text-muted">Slider + Promo banners</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-electronics-store.html" style="width: 250px;"><img src="img/home/preview/th03.jpg" alt="Electronics Store"></a></div>
                      </li>
                      <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-marketplace.html"><span class="d-block text-heading">Marketplace</span><small class="d-block text-muted">Multi-vendor, digital goods</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-marketplace.html" style="width: 250px;"><img src="img/home/preview/th04.jpg" alt="Marketplace"></a></div>
                      </li>
                      <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-grocery-store.html"><span class="d-block text-heading">Grocery Store</span><small class="d-block text-muted">Full width + Side menu</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-grocery-store.html" style="width: 250px;"><img src="img/home/preview/th06.jpg" alt="Grocery Store"></a></div>
                      </li>
                      <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-food-delivery.html"><span class="d-block text-heading">Food Delivery Service</span><small class="d-block text-muted">Food &amp; Beverages delivery</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-food-delivery.html" style="width: 250px;"><img src="img/home/preview/th07.jpg" alt="Food Delivery Service"></a></div>
                      </li>
                      <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-fashion-store-v2.html"><span class="d-block text-heading">Fashion Store v.2</span><small class="d-block text-muted">Slider + Featured categories</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-fashion-store-v2.html" style="width: 250px;"><img src="img/home/preview/th02.jpg" alt="Fashion Store v.2"></a></div>
                      </li>
                      <li class="dropdown position-static mb-0"><a class="dropdown-item py-2" href="home-single-store.html"><span class="d-block text-heading">Single Product Store</span><small class="d-block text-muted">Single product / mono brand</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-single-store.html" style="width: 250px;"><img src="img/home/preview/th05.jpg" alt="Single Product / Brand Store"></a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                    <div class="dropdown-menu p-0">
                      <div class="d-flex flex-wrap flex-sm-nowrap px-2">
                        <div class="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                          <div class="widget widget-links mb-4">
                            <h6 class="fs-base mb-3">Shop layouts</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                            </ul>
                          </div>
                          <div class="widget widget-links mb-4">
                            <h6 class="fs-base mb-3">Marketplace</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                            </ul>
                          </div>
                          <div class="widget widget-links">
                            <h6 class="fs-base mb-3">Grocery store</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item"><a class="widget-list-link" href="grocery-catalog.html">Product Catalog</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="grocery-single.html">Single Product Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="grocery-checkout.html">Checkout</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                          <div class="widget widget-links mb-4">
                            <h6 class="fs-base mb-3">Food Delivery</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-category.html">Category Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                            </ul>
                          </div>
                          <div class="widget widget-links">
                            <h6 class="fs-base mb-3">NFT Marketplace<span class="badge bg-danger ms-1">NEW</span></h6>
                            <ul class="widget-list">
                              <li class="widget-list-item"><a class="widget-list-link" href="nft-catalog-v1.html">Catalog v.1</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="nft-catalog-v2.html">Catalog v.2</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="nft-single-auction-live.html">Single Item - Auction Live</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="nft-single-auction-ended.html">Single Item - Auction Ended</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="nft-single-buy.html">Single Item - Buy Now</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="nft-vendor.html">Vendor Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="nft-connect-wallet.html">Connect Wallet</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="nft-create-item.html">Create New Item</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-1 pt-lg-4 px-2 px-lg-3">
                          <div class="widget widget-links mb-4">
                            <h6 class="fs-base mb-3">Shop pages</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-categories.html">Shop Categories</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-single-v1.html">Product Page v.1</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-single-v2.html">Product Page v.2</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-cart.html">Cart</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-details.html">Checkout - Details</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-payment.html">Checkout - Payment</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-review.html">Checkout - Review</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-complete.html">Checkout - Complete</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="order-tracking.html">Order Tracking</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="comparison.html">Product Comparison</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown active"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Account</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop User Account</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="account-orders.html">Orders History</a></li>
                          <li><a class="dropdown-item" href="account-profile.html">Profile Settings</a></li>
                          <li><a class="dropdown-item" href="account-address.html">Account Addresses</a></li>
                          <li><a class="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                          <li><a class="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                          <li><a class="dropdown-item" href="account-tickets.html">My Tickets</a></li>
                          <li><a class="dropdown-item" href="account-single-ticket.html">Single Ticket</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Vendor Dashboard</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="dashboard-settings.html">Settings</a></li>
                          <li><a class="dropdown-item" href="dashboard-purchases.html">Purchases</a></li>
                          <li><a class="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                          <li><a class="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                          <li><a class="dropdown-item" href="dashboard-products.html">Products</a></li>
                          <li><a class="dropdown-item" href="dashboard-add-new-product.html">Add New Product</a></li>
                          <li><a class="dropdown-item" href="dashboard-payouts.html">Payouts</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">NFT Marketplace<span class="badge bg-danger ms-1">NEW</span></a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="nft-account-settings.html">Profile Settings</a></li>
                          <li><a class="dropdown-item" href="nft-account-payouts.html">Wallet &amp; Payouts</a></li>
                          <li><a class="dropdown-item" href="nft-account-my-items.html">My Items</a></li>
                          <li><a class="dropdown-item" href="nft-account-my-collections.html">My Collections</a></li>
                          <li><a class="dropdown-item" href="nft-account-favorites.html">Favorites</a></li>
                          <li><a class="dropdown-item" href="nft-account-notifications.html">Notifications</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href="account-signin.html">Sign In / Sign Up</a></li>
                      <li><a class="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Pages</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Navbar Variants</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="navbar-1-level-light.html">1 Level Light</a></li>
                          <li><a class="dropdown-item" href="navbar-1-level-dark.html">1 Level Dark</a></li>
                          <li><a class="dropdown-item" href="navbar-2-level-light.html">2 Level Light</a></li>
                          <li><a class="dropdown-item" href="navbar-2-level-dark.html">2 Level Dark</a></li>
                          <li><a class="dropdown-item" href="navbar-3-level-light.html">3 Level Light</a></li>
                          <li><a class="dropdown-item" href="navbar-3-level-dark.html">3 Level Dark</a></li>
                          <li><a class="dropdown-item" href="home-electronics-store.html">Electronics Store</a></li>
                          <li><a class="dropdown-item" href="home-marketplace.html">Marketplace</a></li>
                          <li><a class="dropdown-item" href="home-grocery-store.html">Side Menu (Grocery)</a></li>
                        </ul>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="about.html">About Us</a></li>
                      <li><a class="dropdown-item" href="contacts.html">Contacts</a></li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Help Center</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="help-topics.html">Help Topics</a></li>
                          <li><a class="dropdown-item" href="help-single-topic.html">Single Topic</a></li>
                          <li><a class="dropdown-item" href="help-submit-request.html">Submit a Request</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">404 Not Found</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="404-simple.html">404 - Simple Text</a></li>
                          <li><a class="dropdown-item" href="404-illustration.html">404 - Illustration</a></li>
                        </ul>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="sticky-footer.html">Sticky Footer Demo</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Blog</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog List Layouts</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="blog-list-sidebar.html">List with Sidebar</a></li>
                          <li><a class="dropdown-item" href="blog-list.html">List no Sidebar</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog Grid Layouts</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                          <li><a class="dropdown-item" href="blog-grid.html">Grid no Sidebar</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Single Post Layouts</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="blog-single-sidebar.html">Article with Sidebar</a></li>
                          <li><a class="dropdown-item" href="blog-single.html">Article no Sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Docs / Components</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="docs/dev-setup.html">
                          <div class="d-flex">
                            <div class="lead text-muted pt-1"><i class="ci-book"></i></div>
                            <div class="ms-2"><span class="d-block text-heading">Documentation</span><small class="d-block text-muted">Kick-start customization</small></div>
                          </div></a></li>
                      <li class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="components/typography.html">
                          <div class="d-flex">
                            <div class="lead text-muted pt-1"><i class="ci-server"></i></div>
                            <div class="ms-2"><span class="d-block text-heading">Components<span class="badge bg-info ms-2">40+</span></span><small class="d-block text-muted">Faster page building</small></div>
                          </div></a></li>
                      <li class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="docs/changelog.html">
                          <div class="d-flex">
                            <div class="lead text-muted pt-1"><i class="ci-edit"></i></div>
                            <div class="ms-2"><span class="d-block text-heading">Changelog<span class="badge bg-success ms-2">v2.5.1</span></span><small class="d-block text-muted">Regular updates</small></div>
                          </div></a></li>
                      <li class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="mailto:support@createx.studio">
                          <div class="d-flex">
                            <div class="lead text-muted pt-1"><i class="ci-help"></i></div>
                            <div class="ms-2"><span class="d-block text-heading">Support</span><small class="d-block text-muted">support@createx.studio</small></div>
                          </div></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
	)
}

export default cartLayout;