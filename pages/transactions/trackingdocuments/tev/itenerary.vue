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
                    <b-form-input v-model="filter" placeholder="Input TO Number"></b-form-input>
                    <b-input-group-append >
                      <b-button :disabled="!filter" @click="filter = ''" >Add</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>

                <b-col xl="6">
                  <b-form-group label-cols="2" label="Per page" class="mb-0 datatable-select">
                    <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                  </b-form-group>
                </b-col>

              <b-col xl="6">
                 <p class="h6 ml-auto m-wc">TO#: <u>TO-2022-05-2019</u></p>
              </b-col>
              
              </b-row>
              <table class="table table-striped table-bordered">
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
                  <tr v-for="(er, idx) in entryRow" :key="idx">
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
                        v-model="er.destination"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="time"
                        class="form-control border-0"
                        v-model="er.departure"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="time"
                        class="form-control border-0"
                        v-model="er.arrival"
                      />
                    </td>
                    <td class="p-0">
                      <multiselect
                        v-model="er.mot"
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
                        v-model="er.transportation"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="number"
                        class="form-control border-0 text-right"
                        v-model="er.per_diem"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="number"
                        class="form-control border-0 text-right"
                        v-model="er.others"
                      />
                    </td>
                    <td class="p-0">
                      <h6 class="p-2 text-right">
                        {{ calcTA(er.transportation, er.per_diem, er.others) }}
                      </h6>
                    </td>
                    <td class="p-1 d-flex">
                      <button
                        @click="addRow(idx)"
                        class="btn btn-primary btn-sm p-1 px-2 d-block"
                        :class="idx == 0 ? 'm-auto' : 'mr-2'"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                      <button
                        v-if="idx != 0"
                        @click="deleteRow(idx)"
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
              </table>
              <b-row>
          
             
              <b-col xl="12">
                <br>
                <br>
                <br>
                 <p class="h6 ml-auto m-wc">TO#: <u>TO-2022-05-2019</u></p>
              </b-col>

              </b-row>
              <table class="table table-striped table-bordered" id="">
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
                  <tr v-for="(er, idx) in entryRow2nd" :key="idx">
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
                        v-model="er.destination"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="time"
                        class="form-control border-0"
                        v-model="er.departure"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="time"
                        class="form-control border-0"
                        v-model="er.arrival"
                      />
                    </td>
                    <td class="p-0">
                      <multiselect
                        v-model="er.mot"
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
                        v-model="er.transportation"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="number"
                        class="form-control border-0 text-right"
                        v-model="er.per_diem"
                      />
                    </td>
                    <td class="p-0">
                      <input
                        type="number"
                        class="form-control border-0 text-right"
                        v-model="er.others"
                      />
                    </td>
                    <td class="p-0">
                      <h6 class="p-2 text-right">
                        {{ _calcTA(er.transportation, er.per_diem, er.others) }}
                      </h6>
                    </td>
                    <td class="p-1 d-flex">
                      <button
                        @click="_addRow(idx)"
                        class="btn btn-primary btn-sm p-1 px-2 d-block"
                        :class="idx == 0 ? 'm-auto' : 'mr-2'"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                      <button
                        v-if="idx != 0"
                        @click="_deleteRow(idx)"
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
                    <td colspan="1" class="text-right">{{ _calcGT }}</td>
                  </tr>
                </tfoot>
              </table>
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
import Multiselect from "vue-multiselect";
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Multiselect,
    Datepicker,
  },
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
          date: null,
          destination: null,
          departure: null,
          arrival: null,
          mot: null,
          transportation: null,
          per_diem: null,
          others: null,
        },
      ],
      entryRow2nd: [
        {
          date: null,
          destination: null,
          departure: null,
          arrival: null,
          mot: null,
          transportation: null,
          per_diem: null,
          others: null,
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
    _calcGT() {
      let result = 0;
      this.entryRow2nd.forEach((i) => {
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
    _calcTA(...num) {
      return this.decimalFormat(
        num.reduce(
          (b, a) =>
            parseFloat(b == null || b == "" ? 0 : b) +
            parseFloat(a == null || a == "" ? 0 : a),
          0
        )
      );
    },
    addRow(idx) {
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
      this.entryRow.splice(idx + 1, 0, arr_data);
    },
    _addRow(idx) {
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
      this.entryRow2nd.splice(idx + 1, 0, arr_data);
    },
    deleteRow(idx) {
      if (idx != 0) {
        this.entryRow.splice(idx, 1);
      }
    },
    _deleteRow(idx) {
      if (idx != 0) {
        this.entryRow2nd.splice(idx, 1);
      }
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
