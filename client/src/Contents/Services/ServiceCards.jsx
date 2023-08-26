import React from 'react'
import './Services.css'
import cars2 from '../../undraw_traveling_yhxq.svg'
import cars4 from '../../undraw_toy_car_-7-umw.svg'
import cars5 from '../../undraw_make_it_rain_re_w9pc.svg'
import cars3 from '../../undraw_credit_card_payments_re_qboh.svg'

function ServiceCards() {
  return (
    <div className=''>
        <div class="card-columns">
            <div className="row">
                <div className="col-lg-6 my-2">
                    <div class="card card_size_1">
                        <div class="row g-0">
                            <div class="col-md-4 mt-5">
                                <img src={cars2} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body mt-4">
                                    <h5 class="card-title fw-bold">Card Rent</h5>
                                    <p class="card-text fw-regular fs-6 mt-3">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-2">
                    <div class="card card_size_2">
                        <div class="row g-0">
                            <div class="col-md-4 mt-5">
                                <img src={cars3} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body mt-4">
                                    <h5 class="card-title fw-bold">Fitness expiry</h5>
                                    <p class="card-text fw-regular fs-6 mt-3">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-2">
                    <div class="card card_size_3">
                        <div class="row g-0">
                                <div class="col-md-4 mt-5">
                                    <img src={cars4} class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body mt-4">
                                        <h5 class="card-title fw-bold">RC expiry date</h5>
                                        <p class="card-text fw-regular fs-6 mt-3">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-2">
                    <div class="card card_size_4">
                    <div class="row g-0">
                                <div class="col-md-4 mt-5">
                                    <img src={cars5} class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body mt-4">
                                        <h5 class="card-title fw-bold">LC expiry date</h5>
                                        <p class="card-text fw-regular fs-6 mt-3">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCards