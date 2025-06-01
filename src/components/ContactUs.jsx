import React, { useState, useEffect } from 'react';

// import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { toast } from 'react-toastify';
import './styles/custom.css';
import './styles/styles.css';
import { Checkbox, Input } from 'antd';
import { API_URL } from '../api_config';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Claude Team Plan', 'Claude Enterprise Plan', 'API', 'Claude Code Research Preview'];
// import { API_URL } from '../api_config';



function ContactUs() {
    // const location = useLocation();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    // const initialEmail = location.state?.state?.email || '';

    const { TextArea } = Input;
    const [_formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyname: '',
        companywebsite: '',
        productinterest: '',
        message: '',
    });

    const [checkedList, setCheckedList] = useState();
    const onChange = (list) => {
        setCheckedList(list);
        setFormData(prev => ({
            ...prev,
            productinterest: list.toString(),
        }));
    };


    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateURL = (url) => {
        try {
            // Use URL, assign and do something trivial to avoid unused warning
            const testUrl = new URL(url.startsWith('http') ? url : `http://${url}`);
            return !!testUrl.hostname; // Accessing a property avoids "unused"
        } catch {
            return false;
        }
    };


    const validateFields = () => {
        const fieldErrors = {};
        if (!_formData.firstName) fieldErrors.firstName = 'First name is required.';
        if (!_formData.lastName) fieldErrors.lastName = 'Last name is required.';
        if (!_formData.companyname) fieldErrors.companyname = 'Company name is required.';
        if (!_formData.email || !isValidEmail(_formData.email)) fieldErrors.email = 'Please enter a valid email.';
        if (!_formData.phone || !isValidPhoneNumber(_formData.phone))
            fieldErrors.phone = 'Please enter a valid phone number.';
        if (!_formData.companywebsite || !validateURL(_formData.companywebsite.trim()))
            fieldErrors.companywebsite = 'Please enter a valid website name.';
        if (_formData.productinterest.length === 0) {
            fieldErrors.productinterest = 'Please select at least one product interest.';
        }

        // if (!_formData.city) fieldErrors.city = 'City is required.';

        // if (!_formData.journeyDetails) fieldErrors.journeyDetails = 'Journey details are required.';

        return fieldErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const formDataUpdated = {
            ..._formData,
            [name]: value,
        };
        setFormData(formDataUpdated);
        if (isSubmit) {
            setErrors({});
            const fieldErrors = validateFields(formDataUpdated);
            if (Object.keys(fieldErrors).length > 0) {
                setErrors(fieldErrors);
            }
        }
    };

    const handlePhoneChange = (phone) => {
        //    setIsSubmit(true);
        if (phone) {
            const formDataUpdated = { ..._formData, phone };
            setFormData(formDataUpdated);
            if (isSubmit) {
                setErrors({});
                const fieldErrors = validateFields(formDataUpdated);
                if (Object.keys(fieldErrors).length > 0) {
                    setErrors(fieldErrors);
                }
            }
        }
    };





    useEffect(() => {
        if (success) {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                companyname: '',
                companywebsite: '',
                productinterest: '',
                message: '',
            });
        }
    }, [success]);





    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        const fieldErrors = validateFields();
        if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        setLoading(true);


        const request = {
            firstName: _formData.firstName,
            lastName: _formData.lastName,
            email: _formData.email,
            phone: _formData.phone,
            companyName: _formData.companyname,
            companyWebsite: _formData.companywebsite,
            productInterest: _formData.productinterest,
            message: _formData.message,
        };

        try {
            const response = await fetch(`${API_URL}/User/ContactUs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
            });

            if (!response.ok) {
                throw new Error('Failed to submit. Please try again later.');
            }

            const data = await response.json();

            setLoading(false);
            setIsSubmit(false);



            if (data.success) {
                setSuccess(true);

                toast.success('Thank You Sharing information.');

                // navigate.push('/thank-you', { state: { name: data?.result?.name, pagename: 'reqinvite', } });
                // history.push('/thank-you', {
                //     name: data?.result?.name,
                //     pagename: 'reqinvite',
                // });
            } else {
                toast.error('Something went wrong. Please try again.');

                // setErrors({ form: "Something went wrong. Please try again." });
            }
        } catch (error) {
            setLoading(false);
            toast.error('Something went wrong. Please try again.');

            //   setErrors({ form: "Something went wrong. Please try again." });
        }
    };



    return (
        <main className="main cc-home">
            <section className="hero">
                <div className="page-padding">
                    <div className="frontcontainer frontcontainer">
                        <div className="section-header cc-legal">
                            <div className="eyebrow-pill">
                                <div className="eyebrow-pill-inner">Contact Us</div>
                                <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
                            </div>
                            <h1 className="section-heading cc-large marbtmzero">K4M2A Contact Us</h1>
                        </div>
                        <div className="contactpage">
                            <div className="contactleft">
                                <h2>Contact k4m2a</h2>
                                <p>Connect with our sales team to get additional resources and support as you grow your usage of Claude via the K4M2A API and Claude for Work.</p>

                                <h2>Email k4m2a</h2>
                                <p><a href='mailto:support@k4m2a.com'>support@k4m2a.com</a></p>
                            </div>
                            <div className="contactright">
                                {success && (
                                    <div className="success-message">
                                        <h2>Thank you for contacting us!</h2>
                                        <p>We appreciate your interest and will get back to you as soon as possible.</p>
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="formBox">
                                        <div className="formfields">
                                            <label htmlFor="first-name">
                                                <span>First Name*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                name="firstName"
                                                className="form-control input"
                                                placeholder="Enter First Name"
                                                autoComplete="new-username"  // 👈 updated here
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                value={_formData.firstName}
                                                readOnly
                                                onFocus={(e) => e.target.removeAttribute('readOnly')}
                                                onChange={handleChange}
                                            />
                                            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                                        </div>
                                        <div className="formfields">
                                            <label htmlFor="last-name">
                                                <span>Last Name*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="last-name"
                                                name="lastName"
                                                className="form-control input"
                                                placeholder="Enter Last Name"
                                                autoComplete="new-username"  // 👈 updated here
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                value={_formData.lastName}
                                                readOnly
                                                onFocus={(e) => e.target.removeAttribute('readOnly')}
                                                onChange={handleChange}
                                            />
                                            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                                        </div>
                                        <div className="formfields">
                                            <label htmlFor="last-name">
                                                <span>Email*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className="form-control input"
                                                placeholder="Enter Email"
                                                autoComplete="new-username"  // 👈 updated here
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                value={_formData.email}
                                                readOnly
                                                onFocus={(e) => e.target.removeAttribute('readOnly')}
                                                onChange={handleChange}
                                            />
                                            <span>If you&apos;re an existing user, please enter your account email.</span>
                                            {errors.email && <p className="error-text">{errors.email}</p>}
                                        </div>
                                        <div className="formfields">
                                            <label htmlFor="last-name">
                                                <span>Phone number*</span>
                                            </label>
                                            <PhoneInput
                                                international
                                                className={`form-control input ${errors.phone ? 'input-error' : ''}`}
                                                defaultCountry="US"
                                                value={_formData.phone}
                                                limitMaxLength={20}
                                                onChange={handlePhoneChange}
                                            />
                                            <span>If you&apos;re an existing user, please enter your account phone no.</span>
                                            <div>
                                                {errors.phone ? (
                                                    <p className="error-text">{errors.phone}</p>
                                                ) : _formData.phone ? (
                                                    isValidPhoneNumber(_formData.phone) ? undefined : (
                                                        <p className="error-text">Please enter a valid phone number.</p>
                                                    )
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>

                                        <div className="formfields">
                                            <label htmlFor="company-name">
                                                <span>Company or organization name</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="company-name"
                                                name="companyname"
                                                className="form-control input"
                                                placeholder="Enter Company Name"
                                                autoComplete="new-username"  // 👈 updated here
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                value={_formData.companyname}
                                                readOnly
                                                onFocus={(e) => e.target.removeAttribute('readOnly')}
                                                onChange={handleChange}
                                            />
                                            {errors.companyname && <p className="error-text">{errors.companyname}</p>}
                                        </div>
                                        <div className="formfields">
                                            <label htmlFor="company-website">
                                                <span>Company or organization website</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="company-website"
                                                name="companywebsite"
                                                className="form-control input"
                                                placeholder="Enter Company website"
                                                autoComplete="new-username"  // 👈 updated here
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                value={_formData.companywebsite}
                                                readOnly
                                                onFocus={(e) => e.target.removeAttribute('readOnly')}
                                                onChange={handleChange}
                                            />
                                            {errors.companywebsite && <p className="error-text">{errors.companywebsite}</p>}
                                        </div>

                                        <div className="formfields">
                                            <label htmlFor="product-interest">
                                                <span>Primary product interest*</span>
                                            </label>
                                            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                                            {errors.productinterest && <p className="error-text">{errors.productinterest}</p>}
                                        </div>



                                        <div className="formfields">
                                            <label htmlFor="eval-journey">
                                                <span>Please share a bit more about why you&apos;re contacting us and how the k4m2a team can support you.
                                                </span>
                                            </label>
                                            <TextArea rows={4}
                                                name="message"
                                                value={_formData.message}
                                                onChange={handleChange}
                                            />
                                            {errors.userName && <p className="error-text">{errors.userName}</p>}
                                        </div>
                                        <div className="formfields">

                                            <button type="submit" className="btnsubmit w-button" disabled={loading}>
                                                {loading ? 'Submitting...' : 'Submit'}
                                            </button>
                                        </div>



                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactUs;
