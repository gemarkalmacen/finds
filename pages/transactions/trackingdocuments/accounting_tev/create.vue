<template>
  <div>
    <BreadCrumbs main="Tracking Documents" title="TEV" subTitle="Create" />
    <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Create Payroll</h5>
                    </div>
                    <div class="card-body">
                      <b-form class="needs-validation" @submit="onCustomStyleSubmit">
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_cluster">Cluster</label>
                                    <b-form-input type="text" id="c_form_cluster" v-model="c_form.cluster" :state="c_form_result.cluster" placeholder="Cluster"></b-form-input>
                                    <b-form-valid-feedback :state="c_form_result.cluster">Lock Good</b-form-valid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_lbp">LBP</label>
                                    <b-form-input type="text" id="c_form_lbp" v-model="c_form.lbp" :state="c_form_result.lbp" placeholder="LBP"></b-form-input>
                                    <b-form-valid-feedback :state="c_form_result.lbp">Lock Good</b-form-valid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_amt_certified">Amount Certified</label>
                                    <b-input-group prepend="0.00">
                                        <b-form-input type="number" id="c_form_amt_certified" v-model="c_form.amt_certified" :state="c_form_result.amt_certified" placeholder="amount"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="c_form_result.amt_certified">Please choose a unique and valid amt_certified.</b-form-invalid-feedback>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_fund">Fund 101</label>
                                    <b-form-input type="text" id="c_form_fund" v-model="c_form.fund" :state="c_form_result.fund" placeholder="Fund"></b-form-input>
                                    <b-form-invalid-feedback :state="c_form_result.fund">Please provide a valid fund.</b-form-invalid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_state">Status</label>
                                    <b-form-input type="text" id="c_form_state" v-model="c_form.state" :state="c_form_result.state" placeholder="TE"></b-form-input>
                                    <b-form-invalid-feedback :state="c_form_result.state">Please provide a valid state.</b-form-invalid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_employeecode">Employee</label>
                                    <b-form-input type="text" id="c_form_employeecode" v-model="c_form.employee" :state="c_form_result.employee" placeholder="Employee"></b-form-input>
                                    <b-form-invalid-feedback :state="c_form_result.employee">Please provide a valid employee.</b-form-invalid-feedback>
                                </div>
                            </div>
                                <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_fund">Province</label>
                                    <div class="form-group">
                                      <b-form-select v-model="supported_form.selected_province" :options="province_select_options" :state="c_form_result.province"></b-form-select>
                                      <b-form-invalid-feedback :state="c_form_result.province">Don't leave this blank</b-form-invalid-feedback>
                                    </div>

                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_fund">Municipality</label>
                                    <div class="form-group">
                                      <b-form-select v-model="supported_form.selected_municipality" :options="municipality_select_options" :state="c_form_result.municipality" placeholder="Municipality"></b-form-select>
                                      <b-form-invalid-feedback :state="c_form_result.municipality">Don't leave this blank</b-form-invalid-feedback>
                                    </div>

                                </div>
                                 <div class="col-md-4 mb-3">
                                    <label for="c_form_fund">Barangay</label>
                                    <div class="form-group">
                                      <b-form-select v-model="supported_form.selected_barangay" :options="barangay_select_options" :state="c_form_result.barangay" placeholder="Barangay"></b-form-select>
                                      <b-form-invalid-feedback :state="c_form_result.barangay">Don't leave this blank</b-form-invalid-feedback>
                                    </div>
                                </div>
                              
                            </div>
                            <b-button type="submit" variant="primary">Generate Transaction Number</b-button>
                        </b-form>

                    </div>
                </div>

                <div class="card" v-if="show">
                    <div class="card-header">
                        <h5>Transaction #: T220600001</h5>
                    </div>
                    <div class="card-body">
                        <b-form class="needs-validation">
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_cluster">Scan QR code</label>
                                    <b-form-input type="text" id="c_form_cluster" v-model="c_form.qrcode" :state="c_form_result.qrcode" placeholder="QR Code"></b-form-input>
                                    <b-form-valid-feedback :state="c_form_result.qrcode">Lock Good</b-form-valid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                  <b-button type="button" variant="primary" style="margin-top: 30px;" @click="addClaims">SCAN QR</b-button>
                                </div>
                            </div>
   
                        </b-form>


                    </div>

                </div>
                <!-- --error -->
            <div class="card" v-if="show">
              <div class="card-header py-3 px-5 d-flex">
                <p class="h4 mb-0">
                  List of Employee  <small><i>(Claims)</i></small>
                </p>
              
              </div>
                  <div class="card-body">
                    <b-row>
                      <b-col xl="6">
                        <b-input-group class="datatable-btn">
                          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                          <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-col>

                      <b-col xl="6">
                        <b-form-group label-cols="2" label="Per page" class="mb-0 datatable-select">
                          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <div class="table-responsive datatable-vue">
                      <b-table show-empty stacked="md" :items="items" :fields="tablefields" :filter="filter"
                        :current-page="currentPage" :per-page="perPage">
                        <template #cell(requestedAmount)="data">
                          {{data.value}}
                        </template>

                        <!-- <template #cell(certifiedAmount)="data">
                           <b-input type="text" id="c_form_amt_certified" v-model="data.value" :state="c_form_result.amt_certified" placeholder="Certified amount"></b-input>
                        </template> -->

                        <template #cell(certifiedAmount)="data">
                           <b-input type="text" id="c_form_amt_certified" v-model="data.value" placeholder="Certified amount"></b-input>
                        </template>

                        <template #cell(ppa)="data">
                          {{data.value}}
                        </template>

                        <template #cell(charge)="data">
                          {{data.value}}
                        </template>

                        <template #cell(set)="data">
                          {{data.value}}
                        </template>
                        <template #cell(userLog)="data">
                          {{data.value}}
                        </template>
                        <template #cell(action)="data">
                         <button
                            @click="deleteRow()"
                            class="btn btn-danger btn-sm p-1 px-2 d-block">
                            <i class="icofont icofont-ui-delete"></i>
                        </button>
                          
                        </template>

                      </b-table>
                      <b-modal id="modal-lg" size="lg" title="Timeline" class="theme-modal">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="card">
                                <div class="card-body">

                                  <section class="cd-container" id="cd-timeline">
                                    <div class="cd-timeline-block" style="padding-right:50px ;">
                                      <div class="cd-timeline-img cd-picture bg-primary"><i class="icon-pencil-alt"></i>
                                      </div>
                                      <div class="cd-timeline-content">

                                        <h4>1. Incoming<span class="digits"></span></h4>
                                        <p class="m-0">This is the content of the first section</p><span class="cd-date"
                                          style="padding-left:50px;">Jan
                                          <span class="counter digits">
                                            14</span></span>
                                      </div>
                                    </div>
                                    <div class="cd-timeline-block" style="padding-left:50px;">
                                      <div class="cd-timeline-img cd-movie bg-secondary"><i class="icon-video-camera"></i>
                                      </div>
                                      <div class="cd-timeline-content">
                                        <h4>2. Obligate<span class="digits"></span></h4>
                                        <p class="m-0">This is the content of the second section</p><span class="cd-date"
                                          style="padding-right:50px;">Jan
                                          <span class="counter digits">
                                            14</span></span>
                                      </div>
                                    </div>

                                    <div class="cd-timeline-block" style="padding-right:50px ;">

                                      <div class="cd-timeline-img cd-picture bg-success is-hidden"><i class="icon-image"></i>
                                      </div>
                                      <div class="cd-timeline-content">
                                        <h4>3. Journal<span class="digits"></span></h4>
                                        <p class="m-0">This is the content of the third section</p><span class="cd-date"
                                          style="padding-left:50px;">Jan
                                          <span class="counter digits">
                                            14</span></span>
                                      </div>
                                    </div>

                                    <div class="cd-timeline-block" style="padding-left:50px ;">

                                      <div class="cd-timeline-img cd-location bg-warning is-hidden"><i class="icon-image"></i>
                                      </div>
                                      <div class="cd-timeline-content">
                                        <h4>4. Certified<span class="digits"></span></h4>
                                        <p class="m-0">This is the content of the fourth section</p><span class="cd-date"
                                          style="padding-right:50px;">Jan
                                          <span class="counter digits">
                                            14</span></span>
                                      </div>

                                    </div>
                                    <div class="cd-timeline-block" style="padding-right:50px ;">
                                      <div class="cd-timeline-img cd-movie bg-danger is-hidden"><i
                                          class="icon-pencil-alt"></i></div>
                                      <div class="cd-timeline-content is-hidden">
                                        <h4>5. Check issued</h4>
                                        <p class="m-0">This is the content of the last section</p><span class="cd-date"
                                          style="padding-left:50px;">Feb
                                          <span class="counter digits">26</span></span>
                                      </div>
                                    </div>
                                  </section>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </b-modal>
                    </div>

                    <b-col md="6" class="my-1 p-0">
                      <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="my-0">
                      </b-pagination>
                    </b-col>
            
                  </div>
                  <!-- --last -->
                </div>
            
            </div>
         </div>
        </div>




  </div>
</template>

<script>
  export default {

    data(){
      return{
        email: '',
        show:false,
        supported_form:{
          checkbox:false,
          radio:null,
          selected_province: null,
          selected_municipality: null,
          selected_barangay: null,
          file:null
        },
        province_select_options: [
          { value: null, text:'Select Province' },
          { value: '1', text:'Agusan Del Norte' },
          { value: '2', text:'Agusan Del Sur' },
          { value: '3', text:'Surigao Del Norte' },
          { value: '4', text:'Surigao Del Sur' },
          { value: '5', text:'Dinagat Islands' }
        ],
        municipality_select_options: [
          { value: null, text:'Select Municipality' },
          { value: '1', text:'Butuan City' },
          { value: '2', text:'Cabadbaran' },
          { value: '3', text:'Lianga' },
          { value: '4', text:'Cantillan' },
          { value: '5', text:'Siargao' }
        ],
        barangay_select_options: [
          { value: null, text:'Barangay' },
          { value: '1', text:'J.P. Rizal' },
          { value: '2', text:'Maon' },
          { value: '3', text:'Mahogany' },
          { value: '4', text:'Villakananga' },
          { value: '5', text:'Poblacion' }
        ],
        c_form:{
          cluster:'',
          lbp:'',
          amt_certified:'',
          fund:'',
          state:'',
          employee:'',
          province:'',
          municipality:'',
          barangay:'',
          qrcode:''
        },
        c_form_result:{
          cluster:null,
          lbp:null,
          amt_certified:null,
          fund:null,
          state:null,
          employee:null,
          province:null,
          municipality:null,
          barangay:null,
          qrcode:null
        },
      tablefields: [
        { key: "id", label: "ID", sortable: true },
        { key: "idNumber", label: "ID Number", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "purpose", label: "Purpose", sortable: true },
        { key: "requestedAmount", label: "Requested Amount", sortable: true },
        { key: "certifiedAmount", label: "Certified Amount", sortable: true },
        { key: "ppa", label: "PPA", sortable: true },
        { key: "charge", label: "Charge", sortable: true },
        { key: "set", label: "Set", sortable: false },
        { key: "userLog", label: "User Log", sortable: false },
        { key: "action", label: "Action", sortable: false },
      ],
      items: [],
      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
        //end table
      };
    },
    computed:{

      supported_select_state(){
        if(this.supported_form.selected != null) {
          return true;
        }
      },
      supported_file_state(){
        if(this.supported_form.file === null) {
          return false;
        } else {
          return true;
        }
      },

    },
    methods:{
    scanQrcode(){
        console.log("test");
      },
    onCustomStyleSubmit(evt){  
        this.show=true;
        evt.preventDefault();
        this.onSelectedItems();

        if(this.c_form.cluster !== '') {

          this.c_form_result.cluster = true;
        } else {
          this.c_form_result.cluster = false;
        }

        if(this.c_form.lbp !== '') {
          this.c_form_result.lbp = true;
        } else {
          this.c_form_result.lbp = false;
        }

        if(this.c_form.amt_certified !== '') {
          this.c_form_result.amt_certified = true;
        } else {
          this.c_form_result.amt_certified = false;
        }

        if(this.c_form.fund !== '') {
          this.c_form_result.fund = true;
        } else {
          this.c_form_result.fund = false;
        }

        if(this.c_form.state !== '') {
          this.c_form_result.state = true;
        } else {
          this.c_form_result.state = false;
        }

        if(this.c_form.province !== '') {
          this.c_form_result.province = true;
        } else {
          this.c_form_result.province = false;
        }

        if(this.c_form.municipality !== '') {
          this.c_form_result.municipality = true;
        } else {
          this.c_form_result.municipality = false;
        }

        if(this.c_form.employee !== '') {
          this.c_form_result.employee = true;
        } else {
          this.c_form_result.employee = false;
        }

        if(this.c_form.barangay !== '') {
          this.c_form_result.barangay = true;
        } else {
          this.c_form_result.barangay = false;
        }

      },

      onSelectedItems(){
        if(this.supported_form.selected != null) {
          console.log("trueee");
          return(this.supported_form.selected =true);
        }
        else{
          return(this.supported_form.selected =false);
        }
      },

      //table
    addClaims(idx) {
      let arr_data = {
        id: "#",
        idNumber: "16-22125",
        name: "Reymark Valdehueza",
        purpose: "TE for May 2022",
        requestedAmount: "6000.00",
        certifiedAmount: "15000.00",
        ppa: null,
        charge: null,
        set: null,
        userLog: null,
    };
      this.items.splice(idx + 1, 0, arr_data);
    },
    deleteRow() {
        this.items.splice(1, 1);
    },
    decimalFormat(num) {
      let number = parseFloat(num);
      return number.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      });
    }
    }
  };
</script>