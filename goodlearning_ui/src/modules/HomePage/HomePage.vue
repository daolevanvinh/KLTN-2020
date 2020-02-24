
<style>
  .card-horizontal {
    display: flex;
    flex: 1 1 auto;
    padding: 0 0 0 0;
}
</style>
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://www.zendvn.com/images/slider/KOO5CnJ6Hr.jpeg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://www.zendvn.com/images/slider/DeX0M02V6t.jpeg"></b-carousel-slide>

      <b-carousel-slide img-src="https://www.zendvn.com/images/slider/t1HrRjUfzZ.jpeg"></b-carousel-slide>
    </b-carousel>
    <div class="col-12">
        <div id="WelcomeBack">
            <h1>Welcome back, Nguyễn Duy</h1>
              <h5>Ready to jump back in?</h5>
              <div class="row justify-content-center">
                  <div class="col-5">
                      <div class="col-12 mt-3">
                                  <div class="card">
                                      <div class="card-horizontal">
                                          <div class="img-square-wrapper">
                                              <img class="" src="https://i.udemycdn.com/course/240x135/2589556_e103_2.jpg" alt="Card image cap">
                                          </div>
                                          <div class="card-body">
                                              <h4 class="card-title">How to Edit Your Videos: Official Udemy Course</h4>
                                          </div>
                                      </div>
                                      <div class="card-footer">
                                          <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                  </div>
                  <div class="col-5">
                    <div class="col-12 mt-3">
                            <div class="card">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img class="" src="https://i.udemycdn.com/course/240x135/2589556_e103_2.jpg" alt="Card image cap">
                                    </div>
                                    <div class="card-body">
                                      <h4 class="card-title">How to Edit Your Videos: Official Udemy Course</h4>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="progress">
                                      <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
        </div>
    </div>




    <!--Phần carousel product card-->
  <!--
    *! WARNING: Chưa có phân chia cột phần product card , Chưa xử lý xong JS để load carousel và popover đúng định dạng
    * TODO: Cái này nhớ dùng boostrap phân cột hẳn hoi
    * ? Những cái đã hoàn thành:
    {

    }
     */
    -->
    <div class="col-12">
      <div class="row">
        <h1>What to learn next </h1>
    <h5>Recommended for you</h5>

    <div class="row">
        <div class="col-md-12 offset-md-1">
            <div class="carousel slide" id="myCarousel">
                    <div class="row">
                        <div class="col-md-2 col-sm-6 col-xs-12">
                        <b-row>
                            <div id="popover-1" class="card card_one" style="width: 15rem;">
                                <img class="merchandising-course-card--course-image--3G7Kh" alt="" width="240" height="135" src="https://i.udemycdn.com/course/240x135/2589556_e103_2.jpg" >
                                <div class="card-body">
                                    <p class="card-text">Khóa học lập trình PHP từ căn bản tới nâng cao</p>
                                </div>
                            </div>
                              <b-popover target="popover-1" triggers="hover focus">
                                <template v-slot:title>Cập nhật lần cuối: 12/02/2020</template>
                                <ul id="ul-popover" style="list-style-type:none" >
                                  <li><h5>Khóa học lập trình PHP từ căn bản tới nâng cao</h5></li>
                                  <li><p>Lĩnh vực: Lập trình web | Development</p></li>
                                  <li><p> 255 videos  12 giờ Mọi trình độ</p> </li>
                                
                                </ul>
                                <ul>
                                    <p>Master Adobe Photoshop for Graphic design, Photography, Photoshop retouching, digital painting & illustration, </p>
                                      <li>Learn Photoshop from Scratch to Pro level and add it to your CV.</li>
                                      <li>Your acquired knowledge of Photoshop can be a great skill to start earning money.</li>
                                      <li>Pursuit your graphic designer, Digital Artist, Photographer dream job by mastering Photoshop.</li>
                                  </ul>
                              
                            <div class="col-12">
                              <div class="row">
                                  <div class="col-8" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="danger">Thêm vào giỏ hàng</b-button>
                                  </div>
                                  <div class="col-4" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="light">Yêu thích</b-button>
                                  </div>
                                </div>
                              </div>
                              </b-popover>
                        </b-row>
                        </div>
                        <div class="col-md-2 col-sm-6 col-xs-12">
                        <b-row>
                            <div id="popover-2" class="card card_one" style="width: 15rem;">
                                <img class="merchandising-course-card--course-image--3G7Kh" alt="" width="240" height="135" src="https://i.udemycdn.com/course/240x135/2589556_e103_2.jpg" >
                                <div class="card-body">
                                    <p class="card-text">Khóa học lập trình PHP từ căn bản tới nâng cao</p>
                                </div>
                            </div>
                              <b-popover target="popover-2" triggers="hover focus">
                                <template v-slot:title>Cập nhật lần cuối: 12/02/2020</template>
                                <ul id="ul-popover" style="list-style-type:none" >
                                  <li><h5>Khóa học lập trình PHP từ căn bản tới nâng cao</h5></li>
                                  <li><p>Lĩnh vực: Lập trình web | Development</p></li>
                                  <li><p> 255 videos  12 giờ Mọi trình độ</p> </li>
                                
                                </ul>
                                <ul>
                                    <p>Master Adobe Photoshop for Graphic design, Photography, Photoshop retouching, digital painting & illustration, </p>
                                      <li>Learn Photoshop from Scratch to Pro level and add it to your CV.</li>
                                      <li>Your acquired knowledge of Photoshop can be a great skill to start earning money.</li>
                                      <li>Pursuit your graphic designer, Digital Artist, Photographer dream job by mastering Photoshop.</li>
                                  </ul>
                              
                            <div class="col-12">
                              <div class="row">
                                  <div class="col-8" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="danger">Thêm vào giỏ hàng</b-button>
                                  </div>
                                  <div class="col-4" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="light">Yêu thích</b-button>
                                  </div>
                                </div>
                              </div>
                              </b-popover>
                        </b-row>
                        </div>
                        <div class="col-md-2 col-sm-6 col-xs-12">
                        <b-row>
                            <div id="popover-3" class="card card_one" style="width: 15rem;">
                                <img class="merchandising-course-card--course-image--3G7Kh" alt="" width="240" height="135" src="https://i.udemycdn.com/course/240x135/2589556_e103_2.jpg" >
                                <div class="card-body">
                                    <p class="card-text">Khóa học lập trình PHP từ căn bản tới nâng cao</p>
                                </div>
                            </div>
                              <b-popover target="popover-3" triggers="hover focus">
                                <template v-slot:title>Cập nhật lần cuối: 12/02/2020</template>
                                <ul id="ul-popover" style="list-style-type:none" >
                                  <li><h5>Khóa học lập trình PHP từ căn bản tới nâng cao</h5></li>
                                  <li><p>Lĩnh vực: Lập trình web | Development</p></li>
                                  <li><p> 255 videos  12 giờ Mọi trình độ</p> </li>
                                
                                </ul>
                                <ul>
                                    <p>Master Adobe Photoshop for Graphic design, Photography, Photoshop retouching, digital painting & illustration, </p>
                                      <li>Learn Photoshop from Scratch to Pro level and add it to your CV.</li>
                                      <li>Your acquired knowledge of Photoshop can be a great skill to start earning money.</li>
                                      <li>Pursuit your graphic designer, Digital Artist, Photographer dream job by mastering Photoshop.</li>
                                  </ul>
                              
                            <div class="col-12">
                              <div class="row">
                                  <div class="col-8" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="danger">Thêm vào giỏ hàng</b-button>
                                  </div>
                                  <div class="col-4" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="light">Yêu thích</b-button>
                                  </div>
                                </div>
                              </div>
                              </b-popover>
                        </b-row>
                        </div>
                        <div class="col-md-2 col-sm-6 col-xs-12">
                        <b-row>
                            <div id="popover-4" class="card card_one" style="width: 15rem;">
                                <img class="merchandising-course-card--course-image--3G7Kh" alt="" width="240" height="135" src="https://i.udemycdn.com/course/240x135/2589556_e103_2.jpg" >
                                <div class="card-body">
                                    <p class="card-text">Khóa học lập trình PHP từ căn bản tới nâng cao</p>
                                </div>
                            </div>
                              <b-popover target="popover-4" triggers="hover focus">
                                <template v-slot:title>Cập nhật lần cuối: 12/02/2020</template>
                                <ul id="ul-popover" style="list-style-type:none" >
                                  <li><h5>Khóa học lập trình PHP từ căn bản tới nâng cao</h5></li>
                                  <li><p>Lĩnh vực: Lập trình web | Development</p></li>
                                  <li><p> 255 videos  12 giờ Mọi trình độ</p> </li>
                                
                                </ul>
                                <ul>
                                    <p>Master Adobe Photoshop for Graphic design, Photography, Photoshop retouching, digital painting & illustration, </p>
                                      <li>Learn Photoshop from Scratch to Pro level and add it to your CV.</li>
                                      <li>Your acquired knowledge of Photoshop can be a great skill to start earning money.</li>
                                      <li>Pursuit your graphic designer, Digital Artist, Photographer dream job by mastering Photoshop.</li>
                                  </ul>
                              
                            <div class="col-12">
                              <div class="row">
                                  <div class="col-8" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="danger">Thêm vào giỏ hàng</b-button>
                                  </div>
                                  <div class="col-4" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="light">Yêu thích</b-button>
                                  </div>
                                </div>
                              </div>
                              </b-popover>
                        </b-row>
                        </div>
                        <div class="col-md-2 col-sm-6 col-xs-12">
                        <b-row>
                            <div id="popover-5" class="card card_one" style="width: 15rem;">
                                <img class="merchandising-course-card--course-image--3G7Kh" alt="" width="240" height="135" src="https://i.udemycdn.com/course/240x135/2589556_e103_2.jpg" >
                                <div class="card-body">
                                    <p class="card-text">Khóa học lập trình PHP từ căn bản tới nâng cao</p>
                                </div>
                            </div>
                              <b-popover target="popover-5" triggers="hover focus">
                              <template v-slot:title>Cập nhật lần cuối: 12/02/2020</template>
                                <ul id="ul-popover" style="list-style-type:none" >
                                  <li><h5>Khóa học lập trình PHP từ căn bản tới nâng cao</h5></li>
                                  <li><p>Lập trình web | Development</p></li>
                                  <li><p> 255 videos  12 giờ Mọi trình độ</p> </li>
                                
                                </ul>
                                <ul>
                                    <p>Master Adobe Photoshop for Graphic design, Photography, Photoshop retouching, digital painting & illustration, </p>
                                      <li>Learn Photoshop from Scratch to Pro level and add it to your CV.</li>
                                      <li>Your acquired knowledge of Photoshop can be a great skill to start earning money.</li>
                                      <li>Pursuit your graphic designer, Digital Artist, Photographer dream job by mastering Photoshop.</li>
                                  </ul>
                              
                            <div class="col-12">
                              <div class="row">
                                  <div class="col-8" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="danger">Thêm vào giỏ hàng</b-button>
                                  </div>
                                  <div class="col-4" style="padding: 0 0 0 0">
                                      <b-button size="lg" variant="light">Yêu thích</b-button>
                                  </div>
                                </div>
                              </div>
                              </b-popover>
                        </b-row>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <!--Kết thúc phần carousel product card-->
  </div>
        
      </div>
    </div>
    
  
</template>
  <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <!-- Bootstrap JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>   
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
<script>
export default {
  
}
</script>