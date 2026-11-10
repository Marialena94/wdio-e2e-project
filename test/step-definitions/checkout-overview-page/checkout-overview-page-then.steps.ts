import { Then } from '@wdio/cucumber-framework';
import checkoutOwPageValidations from '../../pages/page-features/checkout-overview-page/checkoutOverview-page.validations';

Then(
    'the checkout overview page should be displayed',
    async () => {
        await checkoutOwPageValidations.validateCheckOutOverviewPageDisplayed();
    }
);