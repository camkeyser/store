<div class="container demo">
        <!-- Shopping Cart Modal -->
        <div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel2">My Shopping Cart</h4>
              </div>
              <div class="modal-body">
                <p>Edit or remove items from your cart below:</p>
                <div class="cartBox">
                </div>
                <div class="cartTotals">
                  <p>Items in cart: <span class="total-items">0</span></p>
                  <hr>
                  <div class="shipEstimate">
                    <h4>Select Shipping Method:</h4>
                    <div class="stShip">
                      <label for="standard" id="standardS">$5.00<br>Standard<br>(5-7 business days)</label>
                      <input type="radio" name="shippingMethod" value="5" id="standard">
                    </div>
                    <div class="exShip">
                      <label for="expedited" id="expeditedS">$15.00<br>Expedited<br>(1-2 business days)</label>
                      <input type="radio" name="shippingMethod" value="15" id="expedited">
                    </div>
                  </div>
                  <div class="calcTot">
                    <button class="estimateBTN">Calculate Total</button>
                    <h3>Total: $<span class="total-cost"></span></h3>
                  </div>
                </div>
                <div class="checkout">
                  <button class="p2c">Proceed To Chekout</button>
                </div>
              </div>
            </div><!-- modal-content -->
          </div><!-- modal-dialog -->
        </div><!-- Shopping Cart Modal -->
      </div><!-- container -->