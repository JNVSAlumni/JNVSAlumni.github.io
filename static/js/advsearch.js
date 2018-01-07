
$(document).ready(function () {
    var ds = new kendo.data.DataSource({
        transport: {
            read: {
                url: "https://script.google.com/macros/s/AKfycby04N7LotTrhxNZ8wMPRW9Pskoo2bRt4HnQ3NwECHGpNK1V3Ywg/exec",
                dataType: "json"
            }
        },
        pageSize: 10
    });
    createKendoGrid(ds);
});

function createKendoGrid(ds){
    $("#grid").kendoGrid({
        dataSource: ds,
        scrollable: true,
        filterable: {
            extra: false,
            operators: {
                string: {
                    contains: "Contains",
                    startswith: "Starts with",
                    eq: "Is equal to",
                    neq: "Is not equal to"

                }
            }
        },
        filterMenuInit: function(e) {
              if (e.field === "Batch") {
                var filterMultiCheck = this.thead.find("[data-field=" + e.field + "]").data("kendoFilterMultiCheck")
                filterMultiCheck.container.empty();
                filterMultiCheck.checkSource.sort({field: e.field, dir: "asc"});

                filterMultiCheck.checkSource.data(filterMultiCheck.checkSource.view().toJSON());
                filterMultiCheck.createCheckBoxes();
              }
            },
        pageable: true,
        columns: [
                    {
                        field: "Name",
                        title: "Name",
                        template: "<div><a target='_blank' href='#=Social#'>#=Name#</a></div>"
                    },
                    {
                        field: "Batch",
                        title: "Batch",
                        filterable: {
                            multi: true
                        }
                    },
                    {
                        field: "Location",
                        title: "Location"
                    },
                    {
                        field: "Organisation",
                        title: "Organisation"
                    },
                    {
                        field: "Designation",
                        title: "Designation"
                    },
                    {
                        field: "Institute",
                        title: "Institute"
                    },
                    {
                        field: "Degree",
                        title: "Degree"
                    }
                ]
    });
}