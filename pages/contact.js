import React from 'react'
import Image from 'next/image'
import styles from '../styles/contact.module.css'

const contact = () => {
  return (
    <div>
      <h1 className={styles.h1}>Melbourne University prof visits BUP</h1>
      <Image className={styles.blog} src="/../public/images/j1.jpg" width={900} height={400} />
      <p className={styles.p}>University of Melbourne associate professor Russell Thompson visited the Bangladesh University of Professionals on Sunday.He made a courtesy call on BUP vice-chancellor Major General Md Mahbub-ul Alam.Later, he took part in a meeting with the high officials of BUP where pro-vice chancellor, registrar, deans of various faculties, chairmen and faculty members were present. At the meeting, various aspects to increase research and academic collaboration between two universities were discussed, said a press release.Bangladesh University of Professionals vice-chancellor Major General Md Mahbub-ul Alam presents a gift to University of Melbourne associate professor Russell Thompson as he pays a courtesy call on the BUP VC on Sunday. — Press release</p>
    </div>
  )
}

export default contact
