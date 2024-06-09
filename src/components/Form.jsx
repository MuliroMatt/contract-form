import React, { useState } from 'react';
import * as Yup from 'yup';
import SuccessCard from './SuccessCard';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import Button from './Button';
import TextArea from './TextArea';
import { StyledForm } from './styles/Form.styled';
import { Group } from './styles/Group';
import CheckBox from './CheckBox';
import { AnimatePresence } from 'framer-motion';

const Form = () => {
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [errors, setErrors] = useState('');
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      queryType: '',
      message: '',
      checkBox: false,
   });

   const validationSchema = Yup.object({
      firstName: Yup.string().required('This field is required'),
      lastName: Yup.string().required('This field is required'),
      email: Yup.string()
         .required('This field is required')
         .email('Please enter a valid email address'),
      queryType: Yup.string().required('Please select a query type'),
      message: Yup.string()
         .required('This field is required')
         .max(256, 'Cannot exceed 256 characters'),
      checkBox: Yup.boolean().oneOf(
         [true],
         'To submit this form, please consent to being contacted'
      ),
   });

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await validationSchema.validate(formData, { abortEarly: false });
         console.log(formData);
         setErrors('');
         setFormData({
            firstName: '',
            lastName: '',
            email: '',
            queryType: '',
            message: '',
            checkBox: false,
          });
         setIsSubmitted(true);
         setFormData(prevData => ({
            ...prevData,
            queryType: ''
          }));
         setTimeout(() => {
            setIsSubmitted(false);
         }, 3000);

      } catch (error) {
         const newErrors = {};

         error.inner.forEach((err) => {
            newErrors[err.path] = err.message;
         });

         setErrors(newErrors);
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleCheckboxChange = () => {
      setFormData({
         ...formData,
         checkBox: !formData.checkBox,
      });
   };

   return (
      <StyledForm onSubmit={handleSubmit}>
         <AnimatePresence>{isSubmitted && <SuccessCard />}</AnimatePresence>
         <Group>
            <FormInput
               name='firstName'
               label='name'
               labelText='First Name'
               errorMessage='This field is required'
               value={formData.firstName}
               onChange={handleChange}
               errors={errors.firstName}
            />
            <FormInput
               name='lastName'
               label='lastname'
               labelText='Last Name'
               errorMessage='This field is required'
               value={formData.lastName}
               onChange={handleChange}
               errors={errors.lastName}
            />
         </Group>
         <FormInput
            name='email'
            label='email'
            labelText='Email Address'
            type='text'
            errorMessage='Please enter a valid email address'
            value={formData.email}
            onChange={handleChange}
            errors={errors.email}
         />
         <span>Query Type</span>
         <Group>
            <FormRadio
               label='first'
               labelText='General Enquiry'
               value='General Enquiry'
               checked={formData.queryType === 'General Enquiry'}
               onChange={handleChange}
               errors={errors.queryType}
            />
            <FormRadio
               label='second'
               labelText='Support Request'
               value='Support Request'
               checked={formData.queryType === 'Support Request'}
               onChange={handleChange}
            />
         </Group>
         <span>Message</span>
         <TextArea
            value={formData.message}
            onChange={handleChange}
            errors={errors.message}
         />
         <CheckBox
            label='checkbox'
            text='I consent to being contacted by the team'
            onChange={handleCheckboxChange}
            checked={formData.checkBox}
            errors={errors.checkBox}
         />
         <Button text='Submit' />
      </StyledForm>
   );
};

export default Form;
