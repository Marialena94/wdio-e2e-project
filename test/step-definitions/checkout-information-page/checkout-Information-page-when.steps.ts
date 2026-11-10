import { When } from '@wdio/cucumber-framework';
import { DataTable } from '@cucumber/cucumber';
import checkoutInfoPageActions from '../../pages/page-features/checkout-information-page/checkoutInfo-page.actions';

When(
    'the user attempts to proceed to checkout by filling in the required information on checkout page',
    async (dataTable: DataTable) => {

        const checkoutData = dataTable.rowsHash();

        await checkoutInfoPageActions.fillCheckoutInformation(
            checkoutData.firstName,
            checkoutData.lastName,
            checkoutData.postalCode
        );

        await checkoutInfoPageActions.clickContinueButton();
    }
);