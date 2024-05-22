import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/WorkItem.css';
import { IWorkItem } from '../interfaces/Interfaces';
import { useEffect, useState } from 'react';

function WorkItem() {

    const [work, setWork] = useState<IWorkItem>(undefined!);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/works/${window.location.href.split("/")[1]}`);
            const data = await response.json();
            setWork(data);
        })();
    }, [])

    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red" style={{ fontSize: '2.25em' }}>works</h2>
                <div className="work-container">
                    <div className="work-visual">
                        <img src={work.img_url} />
                        <iframe src={work.trailer_url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="work-detail">
                        <div className="work-detail-meta">
                            <span>{work.release_date.toString()}</span>
                            <h2>{work.work_name}</h2>
                        </div>
                        <div className="work-detail-story">
                            <h5>Story</h5>
                            <p>Torako Koshi is a high school girl attending Tokyo Metropolitan
                                Hinominami High School.<br />One day, while walking to school,
                                she felt something cold touch her face.<br /> When she looked
                                up, she saw a girl with a runny nose and a horn stuck in an
                                electric wire, unable to move――!?</p>
                            <p>When she accidentally helps Kanoko, a girl with a strange "horn",
                                <br />Torako Koshi's life as an honor student (in disguise)
                                is thrown into disarray...</p>
                            <p>A girl (a former delinquent) meets a deer (?)<br />The Girl
                                Meets Deer story begins!!</p>
                            <p style={{ marginTop:40 }}>Broadcasting starts on TOKYO MX / BS Nippon TV every Sunday
                                from 23:30 from July 7th!</p>
                            <p>*Schedule subject to change.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WorkItem;