var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PotensiDigitalProvinsiSumateraUtara_1 = new ol.format.GeoJSON();
var features_PotensiDigitalProvinsiSumateraUtara_1 = format_PotensiDigitalProvinsiSumateraUtara_1.readFeatures(json_PotensiDigitalProvinsiSumateraUtara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiDigitalProvinsiSumateraUtara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiDigitalProvinsiSumateraUtara_1.addFeatures(features_PotensiDigitalProvinsiSumateraUtara_1);
var lyr_PotensiDigitalProvinsiSumateraUtara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiDigitalProvinsiSumateraUtara_1, 
                style: style_PotensiDigitalProvinsiSumateraUtara_1,
                popuplayertitle: 'Potensi Digital Provinsi Sumatera Utara',
                interactive: true,
    title: 'Potensi Digital Provinsi Sumatera Utara<br />\
    <img src="styles/legend/PotensiDigitalProvinsiSumateraUtara_1_0.png" /> 0 - 0.29<br />\
    <img src="styles/legend/PotensiDigitalProvinsiSumateraUtara_1_1.png" /> 0.29 - 0.49<br />\
    <img src="styles/legend/PotensiDigitalProvinsiSumateraUtara_1_2.png" /> 0.49 - 0.66<br />\
    <img src="styles/legend/PotensiDigitalProvinsiSumateraUtara_1_3.png" /> 0.66 - 0.83<br />\
    <img src="styles/legend/PotensiDigitalProvinsiSumateraUtara_1_4.png" /> 0.83 - 1<br />' });
var format_PotensiIrigasiProvinsiSumateraUtara_2 = new ol.format.GeoJSON();
var features_PotensiIrigasiProvinsiSumateraUtara_2 = format_PotensiIrigasiProvinsiSumateraUtara_2.readFeatures(json_PotensiIrigasiProvinsiSumateraUtara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiIrigasiProvinsiSumateraUtara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiIrigasiProvinsiSumateraUtara_2.addFeatures(features_PotensiIrigasiProvinsiSumateraUtara_2);
var lyr_PotensiIrigasiProvinsiSumateraUtara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiIrigasiProvinsiSumateraUtara_2, 
                style: style_PotensiIrigasiProvinsiSumateraUtara_2,
                popuplayertitle: 'Potensi Irigasi Provinsi Sumatera Utara',
                interactive: true,
    title: 'Potensi Irigasi Provinsi Sumatera Utara<br />\
    <img src="styles/legend/PotensiIrigasiProvinsiSumateraUtara_2_0.png" /> 0 - 0.17<br />\
    <img src="styles/legend/PotensiIrigasiProvinsiSumateraUtara_2_1.png" /> 0.17 - 0.31<br />\
    <img src="styles/legend/PotensiIrigasiProvinsiSumateraUtara_2_2.png" /> 0.31 - 0.44<br />\
    <img src="styles/legend/PotensiIrigasiProvinsiSumateraUtara_2_3.png" /> 0.44 - 0.59<br />\
    <img src="styles/legend/PotensiIrigasiProvinsiSumateraUtara_2_4.png" /> 0.59 - 1<br />' });
var format_PotensiTanamanPanganProvinsiSumateraUtara_3 = new ol.format.GeoJSON();
var features_PotensiTanamanPanganProvinsiSumateraUtara_3 = format_PotensiTanamanPanganProvinsiSumateraUtara_3.readFeatures(json_PotensiTanamanPanganProvinsiSumateraUtara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiTanamanPanganProvinsiSumateraUtara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiTanamanPanganProvinsiSumateraUtara_3.addFeatures(features_PotensiTanamanPanganProvinsiSumateraUtara_3);
var lyr_PotensiTanamanPanganProvinsiSumateraUtara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiTanamanPanganProvinsiSumateraUtara_3, 
                style: style_PotensiTanamanPanganProvinsiSumateraUtara_3,
                popuplayertitle: 'Potensi Tanaman Pangan Provinsi Sumatera Utara',
                interactive: true,
    title: 'Potensi Tanaman Pangan Provinsi Sumatera Utara<br />\
    <img src="styles/legend/PotensiTanamanPanganProvinsiSumateraUtara_3_0.png" /> 0 - 0.1<br />\
    <img src="styles/legend/PotensiTanamanPanganProvinsiSumateraUtara_3_1.png" /> 0.1 - 0.27<br />\
    <img src="styles/legend/PotensiTanamanPanganProvinsiSumateraUtara_3_2.png" /> 0.27 - 0.44<br />\
    <img src="styles/legend/PotensiTanamanPanganProvinsiSumateraUtara_3_3.png" /> 0.44 - 0.65<br />\
    <img src="styles/legend/PotensiTanamanPanganProvinsiSumateraUtara_3_4.png" /> 0.65 - 1<br />' });
var format_PotensiEkonomiProvinsiSumateraUtara_4 = new ol.format.GeoJSON();
var features_PotensiEkonomiProvinsiSumateraUtara_4 = format_PotensiEkonomiProvinsiSumateraUtara_4.readFeatures(json_PotensiEkonomiProvinsiSumateraUtara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiEkonomiProvinsiSumateraUtara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiEkonomiProvinsiSumateraUtara_4.addFeatures(features_PotensiEkonomiProvinsiSumateraUtara_4);
var lyr_PotensiEkonomiProvinsiSumateraUtara_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiEkonomiProvinsiSumateraUtara_4, 
                style: style_PotensiEkonomiProvinsiSumateraUtara_4,
                popuplayertitle: 'Potensi Ekonomi Provinsi Sumatera Utara',
                interactive: true,
    title: 'Potensi Ekonomi Provinsi Sumatera Utara<br />\
    <img src="styles/legend/PotensiEkonomiProvinsiSumateraUtara_4_0.png" /> 0 - 0.057<br />\
    <img src="styles/legend/PotensiEkonomiProvinsiSumateraUtara_4_1.png" /> 0.057 - 0.15<br />\
    <img src="styles/legend/PotensiEkonomiProvinsiSumateraUtara_4_2.png" /> 0.15 - 0.297<br />\
    <img src="styles/legend/PotensiEkonomiProvinsiSumateraUtara_4_3.png" /> 0.297 - 0.526<br />\
    <img src="styles/legend/PotensiEkonomiProvinsiSumateraUtara_4_4.png" /> 0.526 - 1<br />' });
var format_KlasterPotensiProvinsiSumateraUtara_5 = new ol.format.GeoJSON();
var features_KlasterPotensiProvinsiSumateraUtara_5 = format_KlasterPotensiProvinsiSumateraUtara_5.readFeatures(json_KlasterPotensiProvinsiSumateraUtara_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlasterPotensiProvinsiSumateraUtara_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlasterPotensiProvinsiSumateraUtara_5.addFeatures(features_KlasterPotensiProvinsiSumateraUtara_5);
var lyr_KlasterPotensiProvinsiSumateraUtara_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlasterPotensiProvinsiSumateraUtara_5, 
                style: style_KlasterPotensiProvinsiSumateraUtara_5,
                popuplayertitle: 'Klaster Potensi Provinsi Sumatera Utara',
                interactive: true,
    title: 'Klaster Potensi Provinsi Sumatera Utara<br />\
    <img src="styles/legend/KlasterPotensiProvinsiSumateraUtara_5_0.png" /> Potensi ekonomi sangat rendah, Digital rendah, Irigasi rendah, Tanaman pangan rendah<br />\
    <img src="styles/legend/KlasterPotensiProvinsiSumateraUtara_5_1.png" /> Potensi ekonomi sangat rendah, Digital tinggi, Irigasi tinggi, Tanaman pangan tinggi<br />\
    <img src="styles/legend/KlasterPotensiProvinsiSumateraUtara_5_2.png" /> Potensi ekonomi tinggi, Digital sangat tinggi, Irigasi rendah, Tanaman pangan rendah<br />' });
var format_BatasKabupatenKota_6 = new ol.format.GeoJSON();
var features_BatasKabupatenKota_6 = format_BatasKabupatenKota_6.readFeatures(json_BatasKabupatenKota_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupatenKota_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatenKota_6.addFeatures(features_BatasKabupatenKota_6);
var lyr_BatasKabupatenKota_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupatenKota_6, 
                style: style_BatasKabupatenKota_6,
                popuplayertitle: 'Batas Kabupaten/Kota',
                interactive: false,
                title: '<img src="styles/legend/BatasKabupatenKota_6.png" /> Batas Kabupaten/Kota'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PotensiDigitalProvinsiSumateraUtara_1.setVisible(false);lyr_PotensiIrigasiProvinsiSumateraUtara_2.setVisible(false);lyr_PotensiTanamanPanganProvinsiSumateraUtara_3.setVisible(false);lyr_PotensiEkonomiProvinsiSumateraUtara_4.setVisible(false);lyr_KlasterPotensiProvinsiSumateraUtara_5.setVisible(true);lyr_BatasKabupatenKota_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PotensiDigitalProvinsiSumateraUtara_1,lyr_PotensiIrigasiProvinsiSumateraUtara_2,lyr_PotensiTanamanPanganProvinsiSumateraUtara_3,lyr_PotensiEkonomiProvinsiSumateraUtara_4,lyr_KlasterPotensiProvinsiSumateraUtara_5,lyr_BatasKabupatenKota_6];
lyr_PotensiDigitalProvinsiSumateraUtara_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Jumlah desa menurut keberadaan BTS': 'Skor BTS', 'Jumlah Desa menurut keberadaan sinyal telepon sangat kuat/kuat': 'Skor Kekuatan Sinyal ', 'Jumlah desa menurut keberadaan warnet': 'Skor Keberadaan Warnet', 'indeks': 'Indeks Potensi Digital', });
lyr_PotensiIrigasiProvinsiSumateraUtara_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Jumlah desa menurut keberadaan sungai': 'Skor Keberadaan Sungai', 'Jumlah desa menurut keberadaan saluran irigasi': 'Skor Keberadaan Irigasi', 'Jumlah desa menurut keberadaan danau/waduk/bendungan': 'Skor Keberadaan Danau/Waduk/Bendungan', 'indeks': 'Indeks Potensi Irigasi', });
lyr_PotensiTanamanPanganProvinsiSumateraUtara_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Jumlah RTUP Padi Sawah': 'Jumlah RTUP Padi Sawah', 'Jumlah RTUP Jagung': 'Jumlah RTUP Jagung', 'Jumlah RTUP Ubi Kayu': 'Jumlah RTUP Ubi Kayu', 'indeks': 'Indeks Potensi Tanaman Pangan', });
lyr_PotensiEkonomiProvinsiSumateraUtara_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Total Sarana Perdagangan': 'Jumlah Sarana Perdagangan', 'Total Sarana Akomodasi': 'Jumlah Sarana Akomodasi', 'Total Lembaga Keuangan': 'Jumlah Lembaga Keuangan', 'indeks': 'Indeks Potensi Ekonomi', });
lyr_KlasterPotensiProvinsiSumateraUtara_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'digital_indeks': 'Indeks Potensi Digital', 'Ekonomi_indeks': 'Indeks Potensi Ekonomi', 'Irigasi_indeks': 'Indeks Potensi Irigasi', 'Tanaman Pangan_indeks': 'Indeks Potensi Tanaman Pangan', 'class': 'Klaster', });
lyr_BatasKabupatenKota_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'LUASWH': 'Luas Wilayah Menurut Peraturan (HA)', 'TIPADM': 'Tipe Administrasi', 'WADMKK': 'Nama wilayah administrasi Kebupaten/ Kota', 'WADMPR': 'Nama wilayah administrasi Propinsi', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PotensiDigitalProvinsiSumateraUtara_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Jumlah desa menurut keberadaan BTS': 'Range', 'Jumlah Desa menurut keberadaan sinyal telepon sangat kuat/kuat': 'Range', 'Jumlah desa menurut keberadaan warnet': 'Range', 'indeks': 'TextEdit', });
lyr_PotensiIrigasiProvinsiSumateraUtara_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Jumlah desa menurut keberadaan sungai': 'Range', 'Jumlah desa menurut keberadaan saluran irigasi': 'Range', 'Jumlah desa menurut keberadaan danau/waduk/bendungan': 'Range', 'indeks': 'TextEdit', });
lyr_PotensiTanamanPanganProvinsiSumateraUtara_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Jumlah RTUP Padi Sawah': 'Range', 'Jumlah RTUP Jagung': 'Range', 'Jumlah RTUP Ubi Kayu': 'Range', 'indeks': 'TextEdit', });
lyr_PotensiEkonomiProvinsiSumateraUtara_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Total Sarana Perdagangan': 'Range', 'Total Sarana Akomodasi': 'Range', 'Total Lembaga Keuangan': 'Range', 'indeks': 'TextEdit', });
lyr_KlasterPotensiProvinsiSumateraUtara_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'digital_indeks': 'TextEdit', 'Ekonomi_indeks': 'TextEdit', 'Irigasi_indeks': 'TextEdit', 'Tanaman Pangan_indeks': 'TextEdit', 'class': 'Range', });
lyr_BatasKabupatenKota_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PotensiDigitalProvinsiSumateraUtara_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Jumlah desa menurut keberadaan BTS': 'inline label - visible with data', 'Jumlah Desa menurut keberadaan sinyal telepon sangat kuat/kuat': 'inline label - visible with data', 'Jumlah desa menurut keberadaan warnet': 'inline label - visible with data', 'indeks': 'inline label - visible with data', });
lyr_PotensiIrigasiProvinsiSumateraUtara_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Jumlah desa menurut keberadaan sungai': 'inline label - visible with data', 'Jumlah desa menurut keberadaan saluran irigasi': 'inline label - visible with data', 'Jumlah desa menurut keberadaan danau/waduk/bendungan': 'inline label - visible with data', 'indeks': 'inline label - visible with data', });
lyr_PotensiTanamanPanganProvinsiSumateraUtara_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Jumlah RTUP Padi Sawah': 'inline label - visible with data', 'Jumlah RTUP Jagung': 'inline label - visible with data', 'Jumlah RTUP Ubi Kayu': 'inline label - visible with data', 'indeks': 'inline label - visible with data', });
lyr_PotensiEkonomiProvinsiSumateraUtara_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Total Sarana Perdagangan': 'inline label - visible with data', 'Total Sarana Akomodasi': 'inline label - visible with data', 'Total Lembaga Keuangan': 'inline label - visible with data', 'indeks': 'inline label - visible with data', });
lyr_KlasterPotensiProvinsiSumateraUtara_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'digital_indeks': 'inline label - visible with data', 'Ekonomi_indeks': 'inline label - visible with data', 'Irigasi_indeks': 'inline label - visible with data', 'Tanaman Pangan_indeks': 'inline label - visible with data', 'class': 'inline label - visible with data', });
lyr_BatasKabupatenKota_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasKabupatenKota_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});