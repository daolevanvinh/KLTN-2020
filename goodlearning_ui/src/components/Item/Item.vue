<template>
  <div>
    <router-link class="item-link" :to="{name: 'about-page'}">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        id="hover-item"
      >
        <div>
          <h6 class="text-left" style="color: black">{{SummaryTitle}}</h6>
          <p class="text-left" style="color:black;font-weight: 200"><i>{{SummaryAuthor}}</i></p>
        </div>
      </b-card>

      <b-popover target="hover-item" triggers="hover" placement="right">
        <div class="row">
          <div class="col-9">
            <b-button href="#" style="width:100%" variant="danger">Add to card</b-button>
          </div>
          <div class="col-2">
            <b-button href="#" variant="danger">Like</b-button>
          </div>
        </div>
      </b-popover>
      {{tenoduoi}}
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['id','item','tenoduoi'],

  data() {
    return {
      Item: {
        title: "Become a Product Manager | Learn the Skills & Get the Job",
        author: 'ABCXYZ',
        content:
          "The most complete course available on Product Management. 13+ hours of videos, activities, interviews, & more",
        stars: 5,
        sold: 20000,
        whatToLearn: {
          number1: 'Understand the varying role of a Product Manager through different types and sizes of companies',
          number2: 'Understand the Product Lifecycle and how it applies to every product',
          number3: 'Know how to identify ideas worth pursuing and dedicating resources to',
          number4: 'Decide which type of Product Manger best fits one s goals and personality',
          number5: 'Find and compare competitors and competing products'
        },
        description: "**Updated February 2020: Over 1,020 students who have taken this course have gotten jobs as Product Managers! Students now work at companies like Google, Zynga, Airbnb, Wal-Mart, Dell, Booking. com, Jet. com, Vodafone, HomeAway, Boeing, Freelancer. com, Wayfair, & more!** The most updated and complete Product Management course on Udemy! You'll learn the skills that make up the entire Product Management job and process: from ideation to market research, to UX wireframing to prototyping, technology, metrics, and finally to building the product with user stories, project management, scoping, and leadership. We even have interviews with real life PMs, Q&A sessions with students, and a comprehensive guide to preparing and interviewing for a Product Management job. ",
        objectToLearn: {
          number1: 'Anyone looking to get a job in Product Management',
          number2: "Anyone wanting to transition into Product Management",
          number3: "Already established Product Managers who want to advance their skillset"
        }
      }
    };
  },
  computed: {
    SummaryTitle() {
      if(this.Item.title.length > 20) {
        return this.Item.title.replace(0, 20) + '...';
      } else
        return this.Item.title
    },
    SummaryAuthor() {
      if(this.Item.author.length > 15) {
        return this.Item.author.replace(0, 15) + '...';
      } else
        return this.Item.author
    }
  }
};
</script>
<style lang="scss" scoped>
.item-link {
  text-decoration: none;
  &:hover > img {
    filter: brightness(100%);
  }
}
</style>