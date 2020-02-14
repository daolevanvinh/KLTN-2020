<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
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
    <div class="row" style="margin: 0 3rem">
      <div class="col-4" style="padding-top: 5rem">
        <span class="text-center" style="font-size: 15pt">
          <b>The world’s largest selection of courses</b>
        </span>
        <br />
        <span
          style="font-size: 13pt"
        >Choose from over 100,000 online video courses with new additions published every month</span>
      </div>
      <div class="col-8">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Tab 1" active>
              <div class="row">
                <div class="col-4">
                  <Item></Item>
                </div>
                <div class="col-4">
                  <Item></Item>
                </div>
                <div class="col-4">
                  <Item></Item>
                </div>
              </div>
              <div>
                <div class="overflow-auto">
                  <b-pagination
                    @click="alertcheck()"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                  ></b-pagination>
                </div>
              </div>
            </b-tab>
            <b-tab title="Tab 2">
              <Item></Item>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Item from "../../components/Item/Item";
export default {
  data() {
    return {
      rows: 6,
      currentPage: 1,
      perPage: 3
    };
  },
  components: { Item },
  methods: {
    alertcheck() {
      console.log("asdasd")
    }
  }
};
</script>