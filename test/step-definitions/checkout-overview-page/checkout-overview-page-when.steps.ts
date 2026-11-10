import { When } from '@wdio/cucumber-framework';
import checkoutOverviewPageActions from '../../pages/page-features/checkout-overview-page/checkoutOverview-page.actions';

When(
    'the user attempts to click finish button on checkout page',
    async () => {
        await checkoutOverviewPageActions.clickFinishButtonButton();
    }
);