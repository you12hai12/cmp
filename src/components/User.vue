<template>
	<div id="user">
		<form>
			<div>
				<label for="username">用户名：</label>
				<input type="text" id="username" name="username" /><br>
				<label for="password">密&nbsp;码：</label>
				<input type="password" id="password" name="password" /><br>
				<button id="submitBtn">提交</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		name:'User'
	}
</script>

<style>
	#username,#password{
		width: 200px;
		font-size: 12px;
		font-weight: bold;
		font-family: "微软雅黑";
	}
</style>