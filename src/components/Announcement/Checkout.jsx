const Checkout = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center pt-3 m-3 border-bottom">
        <div>
          <h1 className="lead muted">Checkout</h1>
        </div>
        <span>finally</span>
      </div>
      <div className="w-100 d-flex" style={{ height: "800px" }}>
        <iframe
          src="https://pay.pesapal.com/iframe/PesapalIframe3/Index?OrderTrackingId=0838b0a1-317b-49fe-ab61-ddc531eaa7fd"
          title="Payment"
          
          className="w-100 h-100"
        ></iframe>
      </div>
    </div>
  );
};

export default Checkout;
