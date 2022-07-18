<template>
  <div>
    <BreadCrumbs main="Tracking Documents" title="TEV" subTitle="Create" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card mh-70vh">
            <div class="card-header py-3 px-5 d-flex">
              <p class="h4 mb-0">
                Itenerary of Travel (IOT)
              </p>
              <p class="h6 ml-auto m-wc">ID No. <u>16-10177</u></p>
            </div>
            <div class="card-body">
              <b-row>
                <b-col xl="6">
                  <b-input-group class="datatable-btn">
                    <b-form-input v-model="filter" placeholder="Input TO Number">fasfasfasf</b-form-input>
                    <b-input-group-append >
                      <b-button :disabled="!filter" @click="addTable()" >Add</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>


              </b-row><br><br>
              <div v-for="(er, idx1) in entryRow" :key="idx1">

              <b-row>
                <b-col xl="6">
                  <b-input-group class="datatable-btn">
                    
                    <b-input-group-append >
                      <p class="h6 ml-auto m-wc mt-3" >TO#: <u >{{er.to_number}}</u></p>
                      
                      <!-- <b-button :disabled="!filter" @click="addTable()" >Add</b-button> -->
                    </b-input-group-append>
                  </b-input-group>
                </b-col>

                <b-col xl="6">
                  <b-form-group label-cols="2" class="mb-0 datatable-select ">
                    <b-button :disabled="!filter" class="btn btn-danger btn-sm p-1 px-2 text-right" v-if="er.remove_btn" @click="deleteTable(idx1)" variant="danger" >REMOVE</b-button>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- <p class="h6 ml-auto m-wc" >TO#: <u >{{er.to_number}} 
              <div class="col-md-13 text-right"><p v-if="er.remove_btn" @click="deleteTable(idx1)" class="btn btn-danger btn-sm p-1 px-2 text-right">REMOVE</p></div>
              </u>
              </p> -->
          
              <table class="table table-striped table-bordered"  >
                <thead class="text-center thead-dark">
                  <tr>
                    <th rowspan="2" class="p-1 pb-1p">Date</th>
                    <th rowspan="2" class="p-1 pb-1p">
                      Place to be visited (Destination)
                    </th>
                    <th colspan="2" class="p-1">Time</th>
                    <th rowspan="2" class="p-1 pb-1p">
                      Means of Transportation
                    </th>
                    <th rowspan="2" class="p-1 pb-1p">Transportation</th>
                    <th rowspan="2" class="p-1 pb-1p">Per Diem</th>
                    <th rowspan="2" class="p-1 pb-1p">Others</th>
                    <th rowspan="2" class="p-1 pb-1p">Total Amount</th>
                    <th rowspan="2" class="p-1 pb-1p">Action</th>
                  </tr>
                  <tr>
                    <th class="p-1">Departure</th>
                    <th class="p-1">Arrival</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(r, idx2) in er.data" :key="idx2">
                    <td class="p-0">
                      <input
                        type="date"
                        name=""
                        class="form-control digits border-0 bg-white text-dark"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="text"
                        class="form-control border-0"
                        v-model="r.destination"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="time"
                        class="form-control border-0"
                        v-model="r.departure"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="time"
                        class="form-control border-0"
                        v-model="r.arrival"
                      />
                    </td>
                    <td class="p-0">
                      <multiselect
                        v-model="r.mot"
                        :options="options"
                        class="p-0 m-0 border-0"
                        label="name"
                        :searchable="false"
                        :close-on-select="false"
                        :show-labels="false"
                        placeholder=""
                      ></multiselect>
                    </td>
                    <td class="p-0">
                      <input
                        type="number"
                        class="form-control border-0 text-right"
                        v-model="r.transportation"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="number"
                        class="form-control border-0 text-right"
                        v-model="r.per_diem"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="number"
                        class="form-control border-0 text-right"
                        v-model="r.others"
                      />
                    </td>
                    <td class="p-0">
                      <h6 class="p-2 text-right">
                        {{ calcTA(r.transportation, r.per_diem, r.others) }}
                      </h6>
                    </td>
                    <td class="p-1 d-flex">
                      <button
                        @click="addRow(idx1, idx2)"
                        class="btn btn-primary btn-sm p-1 px-2 d-block"
                        :class="idx2 == 0 ? 'm-auto' : 'mr-2'"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                      <button
                        v-if="idx2 != 0"
                        @click="deleteRow(idx1, idx2)"
                        class="btn btn-secondary btn-sm p-1 px-2 d-block"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="8">GRAND TOTAL</td>
                    <td colspan="1" class="text-right">{{ calcGT }}</td>
                  </tr>
                </tfoot>
              </table><br><br>
              </div>

              

            </div>
            <div class="card-footer py-3 px-5">
              <div class="ml-auto d-flex w-mc">
                <nuxt-link
                  class="btn btn-light px-2 mr-1"
                  to="/transactions/trackingdocuments/tev/list"
                >
                  <i class="fa fa-close mr-2"></i>
                  Cancel
                </nuxt-link>
                <button class="btn btn-primary px-2">
                  <i class="fa fa-save mr-2"></i>
                  Save IOT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>    
export default {                  
  data() {
    return {

      options: [
        { code: 1, name: "RP Vice-versa" },
        { code: 2, name: "RP one-way" },
        { code: 3, name: "Hired" },
        { code: 4, name: "PUV" },
      ],
      purpose: null,
      filter: null,
      entryRow: [
        {
          remove_btn:false,
          to_number: 'TO-31231',
          data: [{
            date: null,
            destination: null,
            departure: null,
            arrival: null,
            mot: null,
            transportation: null,
            per_diem: null,
            others: null,
          }]
        },
      ],

      format: "MM/dd/yyyy",
    };
  },
  computed: {
    calcGT() {
      let result = 0;
      this.entryRow.forEach((i) => {
        result +=
          (i.transportation == null || i.transportation == ""
            ? 0
            : parseFloat(i.transportation)) +
          (i.per_diem == null || i.per_diem == ""
            ? 0
            : parseFloat(i.per_diem)) +
          (i.others == null || i.others == "" ? 0 : parseFloat(i.others));
      });
      return this.decimalFormat(result);
    },
  },
  methods: {
    calcTA(...num) {
      return this.decimalFormat(
        num.reduce(
          (b, a) =>
            parseFloat(b == null || b == "" ? 0 : b) +
            parseFloat(a == null || a == "" ? 0 : a),
          0
        )
      );
    },
    addRow(idx1, idx2) {
      this.$toast.success("Row has been added", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      let arr_data = {
        date: null,
        destination: null,
        departure: null,
        arrival: null,
        mot: null,
        transportation: null,
        per_diem: null,
        others: null,
      };
      this.entryRow[idx1].data.splice(idx2 + 1, 0, arr_data);
    },
    addTable() {
      this.$toast.success("IOT has been added", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      let arr_data = {
        to_number: this.filter,
        remove_btn:true,
        data: [{
          date: null,
          destination: null,
          departure: null,
          arrival: null,
          mot: null,
          transportation: null,
          per_diem: null,
          others: null
        }]
      };
    
      this.entryRow.splice(1 + 1, 0, arr_data);
    },
    deleteRow(idx1, idx2) {
      this.$toast.error("Row has been deleted", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      if (idx2 != 0) {
        this.entryRow[idx1].data.splice(idx2, 1);
      }
    },
    deleteTable(idx1){
      this.$toast.error("IOT has been deleted", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      this.entryRow.splice(idx1, 1)
    },
    decimalFormat(num) {
      let number = parseFloat(num);
      return number.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      });
    },
  },
};
</script>
