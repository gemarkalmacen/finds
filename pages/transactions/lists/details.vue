<template>
  <div>
    <BreadCrumbs main="TEV Details" title="TEV" subTitle="Create" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card mh-70vh">
            <div class="card-header py-3 px-5 d-flex">
              <p class="h4 mb-0">
                TEV Details : <small><i>(TEV22010003)</i></small>
              </p>
            </div>
            <div class="card-body">
               <Stepper />
               <Timeline :items="timeline"></Timeline> 
              </div>
            </div>
          </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
import Stepper from "~/components/template/Stepper.vue";
import Timeline from "~/components/template/Timeline.vue";
  export default {
    components: { Stepper, Timeline },
    data(){
      return{
        timeline: [
            {
                id: 1,
                icon_class: 'icofont icofont-ui-check',
                icon_status: 'success',
                title: 'Date Filled',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: 'Someone has started editing.'
            },
            {
                id: 2,
                icon_class: 'icofont icofont-ui-check',
                icon_status: 'success',
                title: 'Received by Immediate Supervisor (thru name of staff)',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Someone has started editing.</p>'
            },
            {
                id: 3,
                icon_class: 'icofont icofont-ui-check',
                icon_status: 'success',
                title: 'Received by RPC/Division Chief (thru name of staff)',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>This message has been delegated.</p>'
            },
            {
                id: 4,
                icon_class: 'icofont icofont-ui-check',
                icon_status: 'primary',
                title: 'Received by ARDO/ARDA (thru name of staff)',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Message has been approved and forwarded to responsible.</p>'
            },
            {
                id: 5,
                icon_class: 'glyphicon glyphicon-map-marker',
                icon_status: '',
                title: 'Received by Accounting Staff (thru name of staff)',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Message has been forwarded for approval.</p>'
            },
                        {
                id: 6,
                icon_class: 'glyphicon glyphicon-comment',
                icon_status: '',
                title: 'Documentation Review',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p><i>On-Going/In Progress Documentation Review</i></p>'
            },
            {
                id: 7,
                icon_class: 'glyphicon glyphicon-edit',
                icon_status: '',
                title: 'Received by Budget Section for Earmarking',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Received by Budget Section for Earmarking</p>'
            },
            {
                id: 8,
                icon_class: 'glyphicon glyphicon-hand-right',
                icon_status: '',
                title: 'Receive by Accounting Staff',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Receive by Accounting Staff</p>'
            },
            {
                id: 9,
                icon_class: 'glyphicon glyphicon-map-marker',
                icon_status: '',
                title: 'Payroll Creation',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Payroll Creation</p>'
            },
            {
                id: 10,
                icon_class: 'glyphicon glyphicon-map-marker',
                icon_status: '',
                title: 'Received by Budget Section',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Received by Budget Section</p>'
            },
                        {
                id: 11,
                icon_class: 'glyphicon glyphicon-comment',
                icon_status: '',
                title: 'Obligate',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p><i>Obligate</i></p>'
            },
            {
                id: 12,
                icon_class: 'glyphicon glyphicon-edit',
                icon_status: '',
                title: 'Journal',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Journal</p>'
            },
            {
                id: 13,
                icon_class: 'glyphicon glyphicon-hand-right',
                icon_status: '',
                title: 'Certified',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Certified</p>'
            },
            {
                id: 14,
                icon_class: 'glyphicon glyphicon-map-marker',
                icon_status: '',
                title: 'Check Issuance',
                controls: [],
                created: '01-01-2022 | 1:00 PM',
                body: '<p>Check Issuance</p>'
            },
            
        ]

      }
    }
  };
</script>
