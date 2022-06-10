<template>
  <div>
    <BreadCrumbs main="Tracking Documents" title="TEV" subTitle="list" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header py-3 px-5">
              <p class="h4">Travel Expense Voucher <small>Tracking</small></p>
            </div>

            <div class="card-body">
              <b-col xl="6">
                <nuxt-link
                  to="/transactions/trackingdocuments/tev/create"
                  class="btn btn-primary mb-5 px-3"
                >
                  <i class="fa fa-plus mr-2"></i>
                  Create Itenerary of Travel (IOT)
                </nuxt-link>
              </b-col>
              <b-row>
                <b-col xl="6">
                  <b-input-group class="datatable-btn">
                    <b-form-input
                      v-model="filter"
                      placeholder="Type to Search"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''"
                        >Clear</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-col>

                <b-col xl="6">
                  <b-form-group
                    label-cols="2"
                    label="Per page"
                    class="mb-0 datatable-select"
                  >
                    <b-form-select
                      v-model="perPage"
                      :options="pageOptions"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>

              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  stacked="md"
                  :items="items"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                  @filtered="onFiltered"
                >
                  <template #cell(obligate)="data">
                    <h5 v-if="data.value == 1">
                      <i class="fa fa-check text-success"></i>
                    </h5>
                  </template>

                  <template #cell(journal)="data">
                    <h5 v-if="data.value == 1">
                      <i class="fa fa-check text-success"></i>
                    </h5>
                  </template>

                  <template #cell(certified)="data">
                    <h5 v-if="data.value == 1">
                      <i class="fa fa-check text-success"></i>
                    </h5>
                  </template>

                  <template #cell(checkIssued)="data">
                    <h5 v-if="data.value == 1">
                      <i class="fa fa-check text-success"></i>
                    </h5>
                  </template>

                  <template #cell(details)>
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
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  class="my-0"
                ></b-pagination>
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
        { key: "amountCertified", label: "Amount Certified", sortable: true },
        { key: "dateFiled", label: "dateFiled", sortable: true },
        { key: "obligate", label: "Obligate", sortable: true },
        { key: "journal", label: "Journal", sortable: true },
        { key: "certified", label: "Certified", sortable: true },
        { key: "checkIssued", label: "Check Issued", sortable: true },
        { key: "details", label: "Details", sortable: false },
      ],
      items: [
        {
          id: "1",
          transactionNo: "TEV-22-01-0001",
          amountCertified: "3000",
          dateFiled: "Jan. 23, 2022",
          obligate: "1",
          journal: "1",
          certified: "1",
          checkIssued: "1",
          details: "asdasd",
        },
        {
          id: "2",
          transactionNo: "TEV-22-01-0002",
          amountCertified: "450",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
          details: "",
        },
        {
          id: "3",
          transactionNo: "TEV-22-01-0003",
          amountCertified: "800",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
          details: "",
        },
        {
          id: "4",
          transactionNo: "TEV-22-01-0004",
          amountCertified: "2000",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
          details: "",
        },
        {
          id: "5",
          transactionNo: "TEV-22-01-0005",
          amountCertified: "1500",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
          details: "",
        },
        {
          id: "6",
          transactionNo: "TEV-22-01-0006",
          amountCertified: "7500",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
          details: "",
        },
        {
          id: "7",
          transactionNo: "TEV-22-01-0007",
          amountCertified: "1200",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
          details: "",
        },
        {
          id: "8",
          transactionNo: "TEV-22-01-0008",
          amountCertified: "4000",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
          details: "",
        },
        {
          id: "9",
          transactionNo: "TEV-22-01-0009",
          amountCertified: "6000",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
          details: "",
        },
        {
          id: "10",
          transactionNo: "TEV-22-01-0010",
          amountCertified: "3600",
          dateFiled: "Jan. 21, 2022",
          obligate: "",
          journal: "",
          certified: "",
          checkIssued: "",
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
