import photoMe from "../assets/hendri2.jpg";
function DescAbout() {
  return (
        <div className="row">
            <div className="col-12">
                <div className="row mb-3">
                    <div className="col-6 fw-bold">Nama Lengkap</div>
                    <div className="col-6">Hendri Setiadi Darmoko</div>
                </div>
                <div className="row mb-3">
                    <div className="col-6 fw-bold">Umur</div>
                    <div className="col-6">21 tahun</div>{" "}
                    {/* Update with your actual age */}
                </div>
                <div className="row mb-3">
                    <div className="col-6 fw-bold">Pendidikan Saat Ini</div>
                    <div className="col-6">Mahasiswa ITTP, Teknik Informatika</div>
                </div>
                <div className="row mb-3">
                    <div className="col-6 fw-bold">Alamat</div>
                    <div className="col-6">Gg. Setrawidjaja I, RT.5/RW.2, Karanglewas Lor, Kec. Purwokerto Bar., Kabupaten Banyumas, Jawa Tengah</div>
                </div>
                <div className="row mb-3">
                    <div className="col-6 fw-bold">Tanggal Lahir</div>
                    <div className="col-6">30 Mei 2003</div>
                </div>
            </div>
        </div>
    );
}

function Skill(){
    return(
        <div className="skill">
            <div className="language">
                <h3>Languages</h3>
                <div className="d-flex gap-2">
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">Html/CSS</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">PHP</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">SQL</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">JavaScript</p>
                </div>
            </div>
            <div className="framework">
                <h3>Framework</h3>
                <div className="d-flex gap-2">
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">React</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">Laravel</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">Bootstrap</p>
                </div>
            </div>
            <div className="tools">
                <h3>Tools</h3>
                <div className="d-flex gap-2">
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">Visual Studio Code</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">Git</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">Figma</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">Laragon</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">XAMPP</p>
                    <p className="card-text  border-2 rounded-3 py-2 px-3  ">DBeaver</p>
                </div>
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="container">
            <h1 className="fs-1 fw-bolder text-center">
                TENTANG <span className="font-primary">SAYA</span>
            </h1>
            <div className="row">
                <div className="col-6">
                    <img src={photoMe} alt="Foto Hendri Setiadi " className="w-100 rounded-4 mt-3"/>
                    <div className="border rounded-4 p-4 my-3">
                        <DescAbout/>
                    </div>
                </div>
                <div className="col-6">
                    <div className=" border-skill rounded-4 p-4 my-3">
                        <Skill/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
