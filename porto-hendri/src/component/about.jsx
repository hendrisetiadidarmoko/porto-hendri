
function About(){
    return(
        <div className="container">
            <h1 className="fs-1 fw-bolder text-center">TENTANG <span className="font-primary">SAYA</span></h1>
            <div className="row">
                <div className="col-6">
                    <div className=""></div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="row mb-3">
                                <div className="col-6 fw-bold">Nama Lengkap</div>
                                <div className="col-6">Hendri Setiadi Darmoko</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 fw-bold">Umur</div>
                                <div className="col-6">21 tahun</div> {/* Update with your actual age */}
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 fw-bold">Pendidikan Saat Ini</div>
                                <div className="col-6">Mahasiswa ITTP, Teknik Informatika</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 fw-bold">Alamat</div>
                                <div className="col-6">Jalan Ganesa No. 10, Bandung</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 fw-bold">Tanggal Lahir</div>
                                <div className="col-6">30 Mei 2003</div> {/* Update with your actual date of birth */}
                            </div>
                        </div>
                        <div className="col-12">
                            {/* Additional information or content can go here */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About