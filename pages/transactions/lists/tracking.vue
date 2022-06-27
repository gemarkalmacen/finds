<template>
  <div>
    <BreadCrumbs main="Tracking Documents" title="Tracking" subTitle="list" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header py-3 px-5">
              <p class="h4">Incoming Transaction <small>Monitoring</small></p>
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
                  :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">

                  <template #cell(details)>
                  <b>
                    <nuxt-link to="#index" class="btn btn-primary btn-sm px-2">
                      <i class="fa fa-file text-light"></i>
                    </nuxt-link>
                  </b>
                  </template>
                </b-table>
              </div>

              <b-col md="6" class="my-1 p-0">
                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="my-0">
                </b-pagination>
              </b-col>
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
      tablefields: [
        { key: "id", label: "ID", sortable: true },
        { key: "transactionNo", label: "Transaction No.", sortable: true },
        { key: "transactionType", label: "Transaction Type", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "details", label: "Details", sortable: false },
      ],
      items: [
        {
          id: "1",
          transactionNo: "2022-01-000001",
          transactionType: "TEV",
          status: "CERTIFIED",
          details: "asdasd",
        },
        {
          id: "2",
          transactionNo: "2022-01-000002",
          transactionType: "PAYROLL",
          status: "OBLIGATE",
          details: "",
        },
        {
          id: "3",
          transactionNo: "2022-01-000003",
          transactionType: "CASH ADVANCES",
          status: "JOURNAL",
          details: "",
        },
        {
          id: "4",
          transactionNo: "2022-01-000004",
          transactionType: "PAYROLL",
          status: "SIGNING (RPMO)",
          details: "",
        },
        {
          id: "5",
          transactionNo: "2022-01-000005",
          transactionType: "PAYROLL",
          status: "CERTIFIED",
          details: "",
        },
        {
          id: "6",
          transactionNo: "2022-01-000006",
          transactionType: "TEV",
          status: "OBLIGATE",
          details: "",
        },
        {
          id: "7",
          transactionNo: "2022-01-000007",
          transactionType: "CASH ADVANCES",
          status: "JOURNAL",
          details: "",
        },
        {
          id: "8",
          transactionNo: "2022-01-000008",
          transactionType: "TEV",
          status: "SIGNING (RPMO)",
          details: "",
        },
        {
          id: "9",
          transactionNo: "2022-01-000009",
          transactionType: "CASH ADVANCES",
          status: "OBLIGATE",
          details: "",
        },
        {
          id: "10",
          transactionNo: "2022-01-000010",
          transactionType: "3600",
          status: "CERTIFIED",
          details: "",
        },
      ],

      filter: null,

      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.tablefields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
