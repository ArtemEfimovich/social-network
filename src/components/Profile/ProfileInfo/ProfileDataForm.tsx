import React, {FormEvent} from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../common/FormsControls/TextArea";
import s from "./ProfileInfo.module.css"

type ProfileDataFormType= {
    handleSubmit:(event: FormEvent<HTMLFormElement>)=>void
    error:string

}




 const ProfileDataForm = ({handleSubmit,error}:ProfileDataFormType )=> {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button >save</button>
                {error && <div className={s.formSummaryError}>{error}</div>}
            </div>
            <div>
                Full name:  <Field placeholder={'Full name'} name={'fullName'} component={Input}
                                  />
            </div>
            <div>
                Looking for a job : <Field placeholder={''} name={'lookingForAJob'} component={Input}
                                          type={'checkbox'} />
                {
                <div>
                    Skills : <Field placeholder={'Skills'} name={'lookingForAJobDescription'} component={TextArea}
                                    />
                </div>}
            </div>
            <div>
                About me:
                <Field placeholder={'AboutMe'} name={'aboutMe'} component={TextArea}
            />
            </div>
            <div>
                {/*Contacts : {Object.keys(profile.contacts).map(key => {
                    return <div className={s.contact}>
                        {key}: {<Field placeholder={''} name={'contacts' + key } component={Input}
                        />}
                    </div>
                  })}*/}
            </div>
        </form>
    );
};



const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;