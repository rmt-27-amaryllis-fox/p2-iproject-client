<script>
export default {
  name: "TickerFinance",
  props: ['data']
}
</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-light">
      <p class="card-text">Financial Information</p>
    </div>
    <div class="card-body">
      <div class="row mb-4">
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Current Assets</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.current_assets.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.current_assets.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.current_assets.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Noncurrent Assets</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.noncurrent_assets.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.noncurrent_assets.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.noncurrent_assets.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Assets</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.assets.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.assets.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.assets.order : '' }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Current Liabilities</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.current_liabilities.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.current_liabilities.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.current_liabilities.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Noncurrent Liabilities</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.noncurrent_liabilities.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.noncurrent_liabilities.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.noncurrent_liabilities.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Liabilities</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.liabilities.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.liabilities.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.liabilities.order : '' }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Equity</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.equity.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.equity.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.equity.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Fixed Assets</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.fixed_assets.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.fixed_assets.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.fixed_assets.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Liabilities And Equity</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.liabilities_and_equity.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.liabilities_and_equity.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.balance_sheet.liabilities_and_equity.order : '' }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Gross Profit</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.gross_profit.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.gross_profit.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.gross_profit.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Income Tax Expense/Benefit</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.income_tax_expense_benefit.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.income_tax_expense_benefit.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.income_tax_expense_benefit.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Costs And Expenses</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.costs_and_expenses.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.costs_and_expenses.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.costs_and_expenses.order : '' }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Non Operating Income/Loss</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.nonoperating_income_loss.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.nonoperating_income_loss.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.nonoperating_income_loss.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Operating Income/Loss</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.operating_income_loss.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.operating_income_loss.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.operating_income_loss.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Net Income/Loss</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.net_income_loss.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.net_income_loss.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.net_income_loss.order : '' }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Basic Earnings Per Share</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.basic_earnings_per_share.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.basic_earnings_per_share.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.basic_earnings_per_share.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Cost Of Revenue</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.cost_of_revenue.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.cost_of_revenue.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.cost_of_revenue.order : '' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-2 fw-bold">Revenues</p>
          <div class="row">
            <div class="col-md-6">
              <p>Value</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.revenues.value : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Unit</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.revenues.unit : '' }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <p>Order</p>
            </div>
            <div class="col-md-6">
              <p>{{ data.financials ? data.financials.income_statement.revenues.order : '' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>