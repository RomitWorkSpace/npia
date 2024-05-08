import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function IndustryPage() {
    const { slug } = useParams();
    const [industryData, setIndustryData] = useState([]);
    const [industryImg, setIndustryImg] = useState([]);
    const [photo, setPhoto] = useState();

    useEffect(() => {

        axios.get(`/api/industry/${slug}`).then(res => {
            setIndustryData(res.data.industry);
            setIndustryImg(res.data.industry.photos);
            setPhoto(`${industryData.image}`);
        })
    },[slug]);

    const handlePhoto = (img) =>{
        setPhoto(img);
    }

    var allphoto = "";

    allphoto = industryImg.map( (item) => {
        return (
            <>
                <div className='col-3' onClick={() => handlePhoto(item.photo)}>
                    <img src={`/storage/app/${item.photo}`} alt="photo" width="100%" />
                </div>
            </>
        )
    })

    return (
        <>
        <div className='container-fluid p-0'>
            <img src={`/storage/app/${industryData.banner}`} alt="banner" width="100%" />

            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <img src={`/storage/app/${photo}`} alt="npia" width="100%" />
                        <div className='row mt-4'>
                            { allphoto }
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-7'>
                        <h3 className='clr bold text-center'>{industryData.name}</h3>
                        <hr className='heading-line' />
                        <div className='pt-5 text-justify'>
                            <div dangerouslySetInnerHTML={{__html: industryData.description}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default IndustryPage
