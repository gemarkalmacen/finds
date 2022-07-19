<template>
  <div>
    <BreadCrumbs main="Tracking Documents" title="TEV" subTitle="list" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header py-3 px-5">
              <p class="h4">List of Payroll</p>
            </div>

            <div class="card-body">
              <b-row>
                <b-col xl="6">
                  <b-input-group class="datatable-btn">
                    <b-form-input v-model="filter" placeholder="Search"></b-form-input>
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

                  <template #cell(status)="data"> 
                    <div class="btn btn-primary btn-xs">{{data.value}}</div>
                    
                                 
                  </template>
                  <template #cell(action)>               
                    <button class="btn btn-primary btn-sm px-2">
                      <i class="fa fa-file text-light"></i>
                    </button>
                    <button class="btn btn-light btn-sm px-2">
                      <i class="fa fa-print text-primary"></i>
                    </button>
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
        { key: "action", label: "Action", sortable: true },
      ],
      items: [
        {
          id: "1",
          transactionNo: "2022-01-000001",
          transactionType: "TEV",
          status: "Incoming",
        },
        {
          id: "2",
          transactionNo: "2022-01-000002",
          transactionType: "450",
          status: "Obligate",
        },
        {
          id: "3",
          transactionNo: "2022-01-000003",
          transactionType: "800",
          status: "Journal",
        },
        {
          id: "4",
          transactionNo: "2022-01-000004",
          transactionType: "2000",
          status: "Signing RPMO",
        },
        {
          id: "5",
          transactionNo: "2022-01-000005",
          transactionType: "1500",
          status: "Incoming",
        },
        {
          id: "6",
          transactionNo: "2022-01-000006",
          transactionType: "7500",
          status: "Check Issued",
        },
        {
          id: "7",
          transactionNo: "2022-01-000007",
          transactionType: "1200",
          status: "Check Issued",
        },
        {
          id: "8",
          transactionNo: "2022-01-000008",
          transactionType: "4000",
          status: "For Payroll",
        },
        {
          id: "9",
          transactionNo: "2022-01-000009",
          transactionType: "6000",
          status: "For Payroll",
        },
        {
          id: "10",
          transactionNo: "2022-01-000010",
          transactionType: "3600",
          status: "Check Issued",
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
