import React from "react";

function Proposalbox() {
  return (
    <div className="proposal-box-custom">
      <div className="services-card-content rounded-lg shadow-lg overflow-hidden flex items-center">
        <div className="p-4 w-3/6 ">
          <h3 className="text-xl font-semibold" style={{ paddingLeft: "0px", paddingRight:"0px" }}>
            Let’s make things happen
          </h3>
          <div>
            <p className="mt-2">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <div className="proposal-button-custom w-full">
              <header class="header">
                <div class="banner">
                  <a href="#" class="butn butn__new">
                    <span>Get your free proposal</span>
                  </a>
                </div>
              </header>
            </div>
          </div>
        </div>
        <div className="w-3/6">
          <img
            src="https://source.unsplash.com/400x300/?nature"
            alt="Search engine optimization"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Proposalbox;
