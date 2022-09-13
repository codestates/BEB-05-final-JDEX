import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';

function Create() {

    const [key, setKey] = useState('klay');
    const [create, setCreate] = useState(false);

	const handleCreate = () => setCreate(true);
	const createClose = () => setCreate(false);

    const [klayPairs, setKlayPairs] = useState([]);

    // useEffect(async () => {
    //     try {
    //         const res = await axios.post(`http://localhost:4000/staking/create_klaypool/`);
    //         setKlayPairs(res.data);
    //         console.log(setKlayPairs);
    //     } catch(error) {
    //         console.log(error)
    //     }
    // })

    

    return (
        <div className="createbtn">
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={handleCreate}>
                    Create New Pool
                </Button>
                <Modal
                    size="lg"
                    show={create}
                    onHide={createClose}
                    backdrop="static"
                    keyboard={false}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Create New Pool</Modal.Title>
                    </Modal.Header>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        >

                        {/* Create klayPair Tab */}
                        <Tab eventKey="klay" title="Klay Pair">
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                <Form.Label>Klay Pair</Form.Label>
                                    <Form.Select disabled >
                                    <option>Klay</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select Token1</Form.Label>
                                    <Form.Select >
                                    {/* 토큰 종류 추가시 등록 */}
                                    {/* <option>{klayPair.pair_name}</option> */}
                                    <option>토큰2</option>
                                    <option>[다른토큰들]</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Pair Name</Form.Label>
                                    <Form.Control
                                    type="text"
                                    placeholder="EX) ETH"
                                    autoFocus
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Pair Symbol</Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={createClose}>
                            취소하기
                        </Button>
                        <Button type="submit" variant="primary">Create</Button>
                        </Modal.Footer>
                        </Tab>

                        {/* Create Token1&2 Pair Tab */}
                        <Tab eventKey="jdx" title="JDX Pair">
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select Token1</Form.Label>
                                    <Form.Select >
                                    {/* 토큰 종류 추가시 등록 */}
                                    <option>토큰1</option>
                                    <option>토큰2</option>
                                    <option>[다른토큰들]</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select Token2</Form.Label>
                                    <Form.Select >
                                    {/* 토큰 종류 추가시 등록 */}
                                    <option>Klay</option>
                                    <option>[다른토큰들]</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Pair Name</Form.Label>
                                    <Form.Control
                                    type="text"
                                    placeholder="EX) ETH"
                                    autoFocus
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Pair Symbol</Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={createClose}>
                            취소하기
                        </Button>
                        <Button type="submit" variant="primary">Create</Button>
                        </Modal.Footer>
                        </Tab>
                    </Tabs>
                    
                </Modal>
            </div>
        </div>
    );
}
  
export default Create;