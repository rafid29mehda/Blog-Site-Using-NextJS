import React from 'react'
import styles from '../styles/signup.module.css'

const signup = () => {
  return (
    <>
<div id="login-form-wrap" className={styles.login1}>
    <h2 className={styles.h2}>Login</h2>
    <form id="login-form" className={styles.form}>
        <p className={styles.p}>
        <input className={styles.input} type="text" id="username" name="username" placeholder="Username" required/><i class="validation"><span></span><span></span></i>
        </p>
        <p className={styles.p}>
        <input className={styles.input} type="email" id="email" name="email" placeholder="Email Address" required/><i class="validation"><span></span><span></span></i>
        </p>
        <p className={styles.p}>
        <input className={styles.input} type="submit" id="login" value="Login"/>
        </p>
    </form>
    <div id="create-account-wrap" className={styles.account}>
    <p className={styles.p}>Not a member? <a className={styles.acc}>Create Account</a></p>
    </div>
</div>
    </>
  )
}

export default signup
