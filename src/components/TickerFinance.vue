<script>
import FinanceCard from "./FinanceCard.vue";

export default {
  name: "TickerFinance",
  components: {FinanceCard},
  props: ['data']
}
</script>

<template>
  <div class="m-3">
    <div class="row mb-4">
      <FinanceCard title="Current Assets"
                   :value="data.financials ? data.financials.balance_sheet.current_assets.value : 0"
                   :unit="data.financials ? data.financials.balance_sheet.current_assets.unit : ''"
                   :order=" data.financials ? data.financials.balance_sheet.current_assets.order : 0"
      />
      <FinanceCard title="Noncurrent Assets"
                   :value="data.financials ? data.financials.balance_sheet.noncurrent_assets.value : 0"
                   :unit="data.financials ? data.financials.balance_sheet.noncurrent_assets.unit : ''"
                   :order="data.financials ? data.financials.balance_sheet.noncurrent_assets.order : 0"
      />
      <FinanceCard title="Assets"
                   :value="data.financials ? data.financials.balance_sheet.assets.value : 0"
                   :unit="data.financials ? data.financials.balance_sheet.assets.unit : ''"
                   :order="data.financials ? data.financials.balance_sheet.assets.order : 0"
      />
      <FinanceCard title="Current Liabilities"
                   :value="data.financials ? data.financials.balance_sheet.current_liabilities.value: 0"
                   :unit="data.financials ? data.financials.balance_sheet.current_liabilities.unit : ''"
                   :order="data.financials ? data.financials.balance_sheet.current_liabilities.order : 0"
      />
      <FinanceCard title="Equity"
                   :value="data.financials ? data.financials.balance_sheet.equity.value: 0"
                   :unit="data.financials ? data.financials.balance_sheet.equity.unit : ''"
                   :order="data.financials ? data.financials.balance_sheet.equity.order : 0"
      />
      <FinanceCard title="Gross Profit"
                   :value="data.financials ? data.financials.income_statement.gross_profit.value: 0"
                   :unit="data.financials ? data.financials.income_statement.gross_profit.unit : ''"
                   :order="data.financials ? data.financials.income_statement.gross_profit.order : 0"
      />
      <FinanceCard title="Basic Eranings Per Share"
                   :value="data.financials ? data.financials.income_statement.basic_earnings_per_share.value: 0"
                   :unit="data.financials ? data.financials.income_statement.basic_earnings_per_share.unit : ''"
                   :order="data.financials ? data.financials.income_statement.basic_earnings_per_share.order : 0"
      />
      <FinanceCard title="Cost Of Revenue"
                   :value="data.financials ? data.financials.income_statement.cost_of_revenue.value: 0"
                   :unit="data.financials ? data.financials.income_statement.cost_of_revenue.unit : ''"
                   :order="data.financials ? data.financials.income_statement.cost_of_revenue.order : 0"
      />
      <FinanceCard title="Revenues"
                   :value="data.financials ? data.financials.income_statement.revenues.value: 0"
                   :unit="data.financials ? data.financials.income_statement.revenues.unit : ''"
                   :order="data.financials ? data.financials.income_statement.revenues.order : 0"
      />
    </div>
  </div>
</template>

<style scoped>

</style>