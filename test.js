var table_ndx = crossfilter(all_data);
var t_dim_doc = table_ndx.dimension(function (d) {
        return d.doc;
    });
var t_dim_timeline = table_ndx.dimension(function (d) {
        return d.timeline;
    });
var t_dim_type = table_ndx.dimension(function (d) {
        return d.type;
    });
var group_time = t_dim_timeline.group().reduceCount().all();
var group_doc  = t_dim_doc.group().reduceCount().all();
var group_type = t_dim_type.group().reduceCount().all();


var flag = false;
