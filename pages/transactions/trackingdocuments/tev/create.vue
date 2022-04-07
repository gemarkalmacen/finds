<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card mh-70vh">
            <div class="card-header py-3 px-5 d-flex">
              <p class="h4 mb-0">
                Itenerary of Travel (IOT) <small><i>Appendix 45</i> Form</small>
              </p>
              <p class="h6 ml-auto m-wc">No. <u>TEV-22-01-0001</u></p>
            </div>
            <div class="card-body">
              <div>
                <div class="form-group">
                  <label for="purpose">Purpose of Travel:</label>
                  <input
                    v-model="purpose"
                    type="text"
                    class="form-control"
                    name="purpose"
                    id="purpose"
                  />
                </div>
              </div>
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
                    <th rowspan="2" class="p-1">
                      Action
                      <button
                        @click="addRow"
                        class="d-block m-auto btn btn-xs btn-primary"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th class="p-1">Departure</th>
                    <th class="p-1">Arrival</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(er, idx) in entryRow" :key="idx">
                    <td class="p-0">
                      <datepicker
                        input-class="datepicker-here form-control digits border-0 bg-white text-dark"
                        :format="format"
                        v-model="er.date"
                      ></datepicker>
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
                    <td class="p-1">
                      <button
                        @click="deleteRow(idx)"
                        class="btn btn-secondary btn-sm p-1 px-2 d-block m-auto"
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
            </div>
            <div class="card-footer py-3 px-5">
              <div class="ml-auto d-flex w-mc">
                <button class="btn btn-light px-2 mr-1">
                  <i class="fa fa-close mr-2"></i>
                  Cancel
                </button>
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
    addRow() {
      this.entryRow.push({
        date: null,
        destination: null,
        departure: null,
        arrival: null,
        mot: null,
        transportation: null,
        per_diem: null,
        others: null,
      });
    },
    deleteRow(idx) {
      this.entryRow.splice(idx, 1);
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
